<script setup lang="ts">
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
</script>

<template>
  <div class="chat-header clearfix">
    <div class="row">
      <div class="col-lg-6">
        <div class="chat-about"><h6 class="m-b-0">{{ userStore.user.name }}</h6> </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
