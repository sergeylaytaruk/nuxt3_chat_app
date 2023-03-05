<script lang="ts" setup>
import WsClient from "../frontend/socket/socketClient";
import { Notify } from 'quasar';

const $q = useQuasar();
const route = useRoute();

const darkActive = computed(() => {
  if (route.query.dark === '1' || $q.dark.isActive) {
    return ['body--dark']
  }
  else {
    return ['body--light']
  }
})
if (route.query.dark === '1') {
  $q.dark.set(true)
}
else {
  $q.dark.set(false)
}

useHead({ bodyAttrs: { class: darkActive } })


onMounted(() => {
});
</script>

<template>
  <NuxtLayout :key="darkActive.join('')">
    <NuxtPage />
  </NuxtLayout>
</template>
