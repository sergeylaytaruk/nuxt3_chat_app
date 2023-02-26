<script setup lang="ts">
import { useQuasar } from 'quasar';
const $q = useQuasar();

let title = ref('Авторизація');
let username = ref('');
let room = ref('');
let register = ref(false);
let btnLabel = ref('Вхід');
let visibility = ref(false);

function required (val) {
  return  (val && val.length > 0 || 'Поле повинно бути заповнено')
}
function short(val) {
  return  (val && val.length > 3 || 'Значення дуже коротке')
}
function submit () {
    /*username.value.validate();
    room.value.validate();

    if (!username.value.hasError && (!room.value.hasError)) {
      $q.notify({
        icon: 'done',
        color: 'positive',
        message: 'Авторизація'
      })
    }*/
  navigateTo('/chat');
}
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
                ref="username"
                square
                clearable
                lazy-rules
                :rules="[required, short]"
                type="username"
                label="Логін"
                model-value="username">
              <template v-slot:prepend>
                <q-icon name="person" />
              </template>
            </q-input>

            <q-input
                ref="room"
                square
                clearable
                type="room"
                lazy-rules
                :rules="[required, short]"
                label="Кімната"
                model-value="room">
              <template v-slot:prepend>
                <q-icon name="house" />
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
          <!--  text-white -->
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
