<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

import { useUserStore } from "~/stores/user";
import { useChatStore } from "~/stores/chat";
import { useMembersStore } from "~/stores/members";
import WsClient from '~/socket/socketClient';

const userStore = useUserStore();
const chatStore = useChatStore();
const membersStore = useMembersStore();

let chatMsg: string = "";
onMounted(() => {
  WsClient.boot();
});

function sendMsg() {
  let data = {
    msg: chatMsg
  };
  WsClient.sendMessage(data);
  chatMsg = "";
}
function userExited() {
  WsClient.exit();
}


</script>

<template>
  <div>
    <h2>Chat</h2>
    <NuxtLink to="/" @click="userExited">Exit</NuxtLink>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2">

          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search...">
          </div>
<!-- /search -->
<!-- list -->
          <ul class="list-unstyled chat-list mt-2 mb-0">
            <li v-for="item in membersStore.list" class="clearfix">
              <div class="name">{{ item.name }}</div>
            </li>
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
                  <ul class="list-unstyled m-b-0">
                    <li v-for="item in chatStore.list">
                      <div :class="item.is_mine ? 'text-end' : 'text-start'">
                        <div class="message-data">
                          <span class="message-data-login">{{ item.name }}</span>
                          <span class="message-data-time">{{ item.date }}</span>
                          <span class="message-data-text">{{ item.msg }}</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
<!-- /history -->
<!-- message input -->
                <div class="row">
                  <div class="col-md-12">
                    <div class="chat-message clearfix">
                      <div class="input-group mb-0">
                        <input type="text" v-model="chatMsg" class="form-control" placeholder="Enter text here..." style="width: 50%;">
                        <button @click="sendMsg" class="btn btn-primary">send</button>
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
.message-data {
  width: 75%;
}
.message-data-login {
  color: #2f58d0;
  display: inline-block;
  margin-right: 7px;
}
.message-data-login, .message-data-time {
  font-weight: 600;
  font-size: 12px;
}
.message-data-text {
  font-weight: 500;
  font-size: 18px;
  display: block;
}
.force-to-bottom {
  position:absolute;
  bottom: 5%;
}
</style>
