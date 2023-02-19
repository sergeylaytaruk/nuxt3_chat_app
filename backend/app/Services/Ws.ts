import { Server } from 'socket.io';
import { WebSocketServer } from 'ws';
import AdonisServer from '@ioc:Adonis/Core/Server';

class Ws {
  public io: Server
  private booted = false

  public wss;
  private members = {};

  public boot() {
    /**
     * Ignore multiple calls to the boot method
     */
    if (this.booted) {
      return
    }

    this.booted = true
    //this.io = new Server(AdonisServer.instance!)
    // CORS
    this.io = new Server(AdonisServer.instance!, {
      cors: {
        origin: '*'
      }
    });
  }

  public addMember(data: { name: string; room: string; }) {
    let user = {'name': data.name};
    if (this.members[data.room]?.length > 0) {
      let list = this.members[data.room];
      list.push(user);
      this.members[data.room] = list;
    } else {
      let list = [];
      // @ts-ignore
      list.push(user);
      this.members[data.room] = list;
    }
    this.sendMembers(data);
  }

  public removeMember(data: { room: string; name: string; }) {
    if (this.members[data.room]?.length > 0) {
      for( var i = 0; i < this.members[data.room].length; i++) {
        if ( this.members[data.room][i].name == data.name) {
          this.members[data.room].splice(i, 1);
        }
      }
    }
    this.sendMembers(data);
  }

  public sendMembers(data: { room: string; name: string; }) {
    this.io.to(`room-${data.room}`).emit("refresh-list-members", {"list": this.members[data.room]});
  }

  public exit(data: { room: string; name: string; socketId: string; }) {
    this.io.to(`room-${data.room}`).emit("user-exited", {"name": data.name});
    this.io.in(data.socketId).socketsLeave(data.room);
  }

  public sendMessage(data: { room: any; name: string; msg: string; }) {
    this.io.to(`room-${data.room}`).emit("new-msg-receive", data);
  }
}

export default new Ws()
