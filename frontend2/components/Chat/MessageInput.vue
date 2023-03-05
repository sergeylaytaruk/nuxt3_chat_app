<script setup lang="ts">
import WsClient from "../../socket/socketClient";

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
</script>

<template>
  <q-footer>
    <q-form @submit.prevent="enviarMensaje">
      <q-toolbar class="bg-primary text-white row">
        <q-input
            v-model="chatMsg"
            class="col-grow q-mr-sm"
            bg-color="white"
            placeholder="Type a message"
            dense
            outlined
            rounded
            autofocus
        />
        <q-btn round flat icon="send" type="submit" @click="sendMsg" />
      </q-toolbar>
    </q-form>
  </q-footer>
</template>

<style scoped>

</style>
