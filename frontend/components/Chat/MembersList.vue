<script setup lang="ts">
import { useMembersStore } from "~/stores/members";
//import WsClient from "../../socket/socketClient";
const membersStore = useMembersStore();

let searchMember: string = "";
let timer: Timeout;
let membersList = ref([]);

membersStore.$subscribe((mutation, state) => {
  membersList.value = state.list;
});

onMounted(() => {
  membersList.value = membersStore.list;
});

function searchChange() {
  clearTimeout(timer);
  timer = setTimeout(function() {
    membersList.value = membersStore.list.filter((selection) => {
      return selection['name'].toLowerCase().includes(searchMember);
    });
  }, 750);
}

function resetSearch() {
  membersList.value = membersStore.list;
  searchMember = "";
}
</script>

<template>
<div>
  <!-- search -->
  <div class="input-group">
    <input type="text" v-model="searchMember" @input="searchChange" class="form-control" placeholder="Search...">
    <button @click="resetSearch" class="btn btn-outline-secondary">Clear</button>
  </div>
  <!-- /search -->
  <!-- list -->
  <ul class="list-unstyled chat-list mt-2 mb-0">
    <li v-for="item in membersList" class="clearfix">
      <div class="name">{{ item.name }}</div>
    </li>
  </ul>
  <!-- /list -->
</div>
</template>

<style scoped>

</style>
