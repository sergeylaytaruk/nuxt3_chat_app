<script setup lang="ts">
import WsClient from '~/socket/socketClient';
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
import { useMembersStore } from "~/stores/members";
const membersStore = useMembersStore();
import { useChatStore } from "~/stores/chat";
const chatStore = useChatStore();
import { useInterfaceStore } from "~/stores/interface";
const interfaceStore = useInterfaceStore();

function toggleLeftDrawer () {
  interfaceStore.toggleLeftDrawer();
}
onMounted(() => {
  WsClient.boot();
});

function userExited() {
  WsClient.exit();
  membersStore.list = [];
  chatStore.list = [];
}
</script>

<template>
  <q-header elevated>
    <q-toolbar class="bg-primary text-white"> <!-- bg-grey-3 text-black -->
      <q-btn
          round
          flat
          icon="keyboard_arrow_left"
          class="WAL__drawer-open q-mr-sm"
          @click="toggleLeftDrawer"
      />

      <q-btn round flat>
        <q-avatar>
          <img src="~/assets/no-foto.jpg">
        </q-avatar>
      </q-btn>

      <span class="q-subtitle-1 q-pl-md">
        {{ userStore.user.name }}
      </span>

      <q-space/>
      <NuxtLink class="text-white" to="/" @click="userExited">Exit</NuxtLink>
    </q-toolbar>
  </q-header>
</template>

<style scoped>

</style>
