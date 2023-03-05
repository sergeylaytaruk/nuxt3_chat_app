<script setup>
import { useQuasar } from 'quasar';
import WsClient from '~/socket/socketClient';
import Header from "~/components/Chat/Header.vue";
import ChatHistory from "~/components/Chat/ChatHistory.vue";
import MessageInput from "~/components/Chat/MessageInput.vue";
import MembersList from "~/components/Chat/MembersList.vue";
definePageMeta({
  middleware: 'auth',
});
const $q = useQuasar();
const style = computed(() => ({
  height: $q.screen.height + 'px'
}));

onMounted(() => {
  WsClient.boot();
});

function userExited() {
  WsClient.exit();
}
</script>

<template>
  <div class="WAL position-relative bg-grey-4" :style="style">
    <q-layout view="lHh Lpr lFf" class="WAL__layout shadow-3" container>
    <Header />
    <MembersList />
    <ChatHistory />
    <MessageInput />
    </q-layout>
  </div>
</template>

<style lang="sass">
.WAL
  width: 100%
  height: 100%
  padding-top: 0px
  padding-bottom: 0px
  &:before
    content: ''
    height: 127px
    position: fixed
    top: 0
    width: 100%
  &__layout
    margin: 0 auto
    z-index: 4000
    height: 100%
    width: 90%
    max-width: 950px
    border-radius: 5px
  &__field.q-field--outlined .q-field__control:before
    border: none
  .q-drawer--standard
    .WAL__drawer-close
      display: none
  .q-message-container > div
    width: 100%
</style>
