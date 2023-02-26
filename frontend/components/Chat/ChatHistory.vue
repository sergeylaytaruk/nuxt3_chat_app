<script setup lang="ts">
import { useChatStore } from "~/stores/chat";
const chatStore = useChatStore();
</script>

<template>
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
</template>

<style scoped>
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
</style>
