<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
});

import { useUserStore } from "~/stores/user";
import { useChatStore } from "~/stores/chat";
import { useMembersStore } from "~/stores/members";
import WsClient from '~/socket/socketClient';
import Header from '~/components/Chat/Header.vue';
import MembersList from '~/components/Chat/MembersList.vue';
import ChatHistory from '~/components/Chat/ChatHistory.vue';
import MessageInput from '~/components/Chat/MessageInput.vue';

const userStore = useUserStore();
const chatStore = useChatStore();
const membersStore = useMembersStore();

let chatMsg: string = "";
let searchMember: string = "";
let timer: Timeout;
let membersList = ref([]);

onMounted(() => {
  WsClient.boot();
  //membersList.value = membersStore.list;
});

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
          <MembersList />
        </div>
        <div class="col-md-10">
          <div class="row">
            <div class="col-md-12">
              <div class="chat">
<!-- chat -->
                <Header />
                <ChatHistory />
                <MessageInput />
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
}
</style>
