<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
userStore.clearUser();
const formData = ref({
  userLogin: '',
  roomName: '',
});


let title = ref('Авторизація');
let btnLabel = ref('Вхід');

function required (val) {
  return  (val.trim().length > 0 || 'The field must be filled.');
}
function short(val) {
  return  (val.trim().length > 3 || 'The value is very short. More than 3 characters are required.');
}

function submit() {
  const user = {
    name: formData.value.userLogin,
    room: formData.value.roomName,
  };
  userStore.setUser(user);
  navigateTo('/chat');
}

onMounted(() => {
});
</script>

<template>
  <q-layout>
    <q-page-container>
      <q-page
          class="row justify-center"
          style="background: linear-gradient(#8274C5, #5A4A9F);"
      >
        <!-- page content -->
  <div class="column q-pa-lg">
    <div class="row">
      <q-card square class="shadow-24" style="width:400px;height:540px;">
        <q-card-section class="bg-deep-purple-7">
          <h4 class="text-h5 text-white q-my-md">{{ title}}</h4>

        </q-card-section>
        <q-card-section>
          <q-form>
<!-- FORM -->
            <q-input
                tabindex="0"
                clearable
                square
                lazy-rules
                :rules="[required, short]"
                label="Login"
                v-model="formData.userLogin"
            >
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
              <template v-if="text" v-slot:append tabindex="-1">
                <q-icon name="cancel" @click.stop.prevent="text = null" class="cursor-pointer" tabindex="-1" />
              </template>
            </q-input>

            <q-input
                tabindex="1"
                clearable
                square
                lazy-rules
                :rules="[required, short]"
                label="Room"
                v-model="formData.roomName"
            >
              <template v-slot:prepend>
                <q-icon name="house" />
              </template>
              <template v-if="text" v-slot:append tabindex="-1">
                <q-icon name="cancel" @click.stop.prevent="text = null" class="cursor-pointer" />
              </template>
            </q-input>

<!-- /FORM -->
          </q-form>
        </q-card-section>
        <q-card-actions class="q-px-lg">
          <q-btn
              color="white"
              text-color="black"
              size="lg"
              @click="submit"
              class="full-width"
              :label="btnLabel" />
<!--          <NuxtLink to="/chat">chat page</NuxtLink>-->
        </q-card-actions>
      </q-card>
    </div>
  </div>
        <!-- /page content -->
      </q-page>
    </q-page-container>
  </q-layout>

</template>

<style scoped>

</style>
