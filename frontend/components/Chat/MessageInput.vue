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
console.log("data=", data);
  WsClient.sendMessage(data);
  chatMsg = "";
}
</script>

<template>
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
</template>

<style scoped>

</style>
