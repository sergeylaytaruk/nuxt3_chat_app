
import { DefaultEventsMap } from "@socket.io/component-emitter";
import { io, Socket } from "socket.io-client";
import { useUserStore } from "~/stores/user";
import { useChatStore } from "~/stores/chat";
import { useMembersStore } from "~/stores/members";

const userStore = useUserStore();
const chatStore = useChatStore();
const membersStore = useMembersStore();

class WsClient {
    private booted = false;
    public io: Socket | undefined;

    public boot() {
        if (this.booted) {
            return;
        }
        let room: string = userStore.userRoom;
        this.booted = true;
        this.io = io("http://127.0.0.1:3002");

        this.io.on("connect", () => {
            // @ts-ignore
            console.log(this.io.id);
            // @ts-ignore
            this.io.emit('signin', {"name": userStore.userLogin, "room": userStore.userRoom});
        });
        this.io.on("refresh-list-members", (data) => {
            console.log("EVENT CLIENT refresh-list-members=", data);
            if (data.list.length > 0) {
                membersStore.refreshList(data.list);
            }
        });
        this.io.on("user-exited", (data) => {
            console.log("user-exited=", data);
        });
        this.io.on("new-msg-receive", (data) => {
            console.log("new-msg-receive", data);
            chatStore.addMessage({msg: data.msg, name: data.name, is_mine: this.io.id == data.socketId});
        });

    }
    public exit() {
        console.log("EXIT");
        // @ts-ignore
        this.io.emit('exit', {"name": userStore.userLogin, "room": userStore.userRoom});
    }
    public sendMessage(data: { msg: string; }) {
        // @ts-ignore
        this.io.emit('new-msg', {"name": userStore.userLogin, "msg": data.msg, "room":userStore.userRoom, "is_mine": true});
    }
}

export default new WsClient()
