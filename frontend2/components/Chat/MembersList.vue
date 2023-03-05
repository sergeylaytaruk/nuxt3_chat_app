<script setup lang="ts">
import { useMembersStore } from "~/stores/members";
//import WsClient from "../../socket/socketClient";
const membersStore = useMembersStore();
import { useInterfaceStore } from "~/stores/interface";
const interfaceStore = useInterfaceStore();

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
  <q-drawer
      v-model="interfaceStore.leftDrawerOpen"
      show-if-above
      bordered
      :breakpoint="690"
  >
    <q-toolbar class="bg-grey-3">
      <q-avatar class="cursor-pointer">
        <img src="https://cdn.quasar.dev/logo-v2/svg/logo.svg" />
      </q-avatar>

      <q-space />

      <q-btn
          round
          flat
          icon="close"
          class="WAL__drawer-close"
          @click="toggleLeftDrawer"
      />
    </q-toolbar>

    <q-toolbar class="bg-grey-2">
      <q-input rounded outlined dense class="WAL__field full-width" bg-color="white" v-model="searchMember" v-on:keyup="searchChange" placeholder="Search ...">
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-btn
          round
          flat
          icon="clear"
          @click="resetSearch"
      />
    </q-toolbar>

    <q-scroll-area style="height: calc(100% - 100px)">
      <q-list>
        <q-item
            v-for="item in membersList"
            v-ripple
        >
          <q-item-section avatar>
            <q-avatar>
              <img src="~/assets/no-foto.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label lines="1">
              {{ item.name }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<style scoped>

</style>
