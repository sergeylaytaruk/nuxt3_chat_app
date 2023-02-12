<script setup>
definePageMeta({
  middleware: 'auth',
});
//const io = useNuxtApp();
// SOCKET IO

import { io } from "socket.io-client";
import { Manager } from "socket.io-client";
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

onMounted(() => {
  console.log('mounted in Chat');
  console.log("WEBSOCKET CLIENT INIT");
  const socket = io("http://127.0.0.1:3002");
  socket.on("connect", () => {
    console.log("WEBSOCKET CLIENT CONNECTED");
    console.log(socket.id);
    socket.emit('my-event', {"id": "tram"});
  });

  const manager = new Manager("ws://127.0.0.1:3002", {
    reconnectionDelayMax: 10000
  });
  const soc = manager.socket("/room");
  soc.emit("hello", { a: "b", c: [] });
  soc.on("resp", (data) => {
    console.log("CLIENT NS ROOM EVENT RESP", data);
  });
});
</script>

<template>
  <div>
    <h2>Chat</h2>
    <NuxtLink to="/">Exit</NuxtLink>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">

          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search...">
          </div>
<!-- /search -->
<!-- list -->
          <ul class="list-unstyled chat-list mt-2 mb-0">
<!--            <li class="clearfix">-->
<!--              <div class="name"></div>-->
<!--            </li>-->
          </ul>
<!-- /list -->
        </div>
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-12">
              <div class="chat">
<!-- chat -->
<!-- header -->
                <div class="chat-header clearfix">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="chat-about"><h6 class="m-b-0">{{userStore.user.name}}</h6> </div>
                    </div>
<!--                    <div class="col-lg-6 hidden-sm text-right"> </div>-->
                  </div>
                </div>
<!-- /header -->
<!-- history -->
                <div class="chat-history">
                  <ul class="m-b-0">
                    <!--<li class="clearfix">
                      <div class="message-data text-right">
                        <span class="message-data-time">10:10 AM, Today</span>
                      </div>
                      <div class="message other-message float-right"> Hi Aiden, how are you? How is the project coming along?</div>
                    </li>
                    <li class="clearfix">
                      <div class="message-data">
                        <span class="message-data-time">10:12 AM, Today</span>
                      </div>
                      <div class="message my-message">Are we meeting today?</div>
                    </li>-->
                  </ul>
                </div>
<!-- /history -->
<!-- message input -->
                <div class="row">
                  <div class="col-md-12">
                    <div class="chat-message clearfix">
                      <div class="input-group mb-0">
                        <input type="text" class="form-control" placeholder="Enter text here..." style="width: 50%;">
                      </div>
                    </div>
                  </div>
                </div>
<!--                <div class="container force-to-bottom"></div>-->
<!-- /message input -->
<!-- /chat -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat {
  margin-left: 280px;
  border-left: 1px solid #eaeaea;
}
.force-to-bottom {
  position:absolute;
  bottom: 5%;
  /*width: 100%;*/
}
</style>
