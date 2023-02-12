import { Server } from 'socket.io';
import { WebSocketServer } from 'ws';
import AdonisServer from '@ioc:Adonis/Core/Server';

class Ws {
  public io: Server
  private booted = false

  public wss

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

    this.wss = new WebSocketServer({ port: 3001 });
  }
}

export default new Ws()
