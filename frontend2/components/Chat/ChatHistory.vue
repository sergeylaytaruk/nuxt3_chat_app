<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useChatStore } from "~/stores/chat";
const chatStore = useChatStore();
const $q = useQuasar();
const style = computed(() => ({
  height: $q.screen.height + 'px'
}))
</script>

<template>
  <q-page-container class="bg-grey-2" :style="style">
    <q-scroll-area style="height: calc(100% - 5px)">
      <div class="q-pa-md row justify-center">
        <div style="width: 100%; max-width: 400px">

          <q-chat-message style="width: 100%;"
              :bg-color="item.is_mine ? 'yellow-5' : 'primary'"
              :text-color="item.is_mine ? 'black' : 'white'"
              :sent=item.is_mine
              :stamp="item.date"
              v-for="item in chatStore.list"
          >
            <template v-slot:name>{{ item.name }}</template>
            <template v-slot:avatar>
              <img
                  class="q-message-avatar q-message-avatar--received"
                  src="~/assets/no-foto.jpg"
              >
            </template>

            <div class="item-message-text">
              {{ item.msg }}
            </div>
  <!--          <q-spinner-dots size="2rem" />-->
          </q-chat-message>

        </div>
      </div>
    </q-scroll-area>
  </q-page-container>
</template>



<style scoped>

</style>
