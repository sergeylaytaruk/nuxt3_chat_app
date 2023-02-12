<template>
  <div class="container-fluid">
    <!--<NuxtWelcome />-->
<!--    <pre>{{ counter.$state }}</pre>-->
<!--    <Login />-->
<!--    <NuxtLayout>-->
<!--      <NuxtPage />-->
<!--    </NuxtLayout>-->
<!--    <Nuxt />-->
<!--    <NuxtPage />-->
    <!--<Chat />-->
<!--    <NuxtLayout>-->
<!--      <NuxtPage />-->
<!--    </NuxtLayout>-->
<!--    <pre>{{ cnt }}</pre>-->
<!--    <pre>{{ theme.$state.name }}</pre>-->
<!--    <div>{{ isLoggedIn }}</div>-->
<!--    <index />-->
    <NuxtPage />
<!-- modal auth -->
    <div class="modal fade" tabindex="-1" aria-hidden="true" id="auth-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Warning</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Sorry, you need to fill your login and room.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
<!-- /modal auth -->

  </div>

</template>

<script>
//lang="ts"
import 'bootstrap/dist/css/bootstrap.min.css';

import { useAuthStore } from "~/stores/auth";
//import { storeToRefs } from "pinia";
//import { useTheme } from '~/stores/simple';
//import {myStore} from '~/stores/piniaStore';
import Index from "./pages";

/*const test = myStore()
onMounted(() => {
  test.$patch({
    isReady: true
  })
  console.log(test.isReady)
})*/
export default defineComponent({
  components: {Index},
  setup() {
    const nuxt = useNuxtApp();
    //console.log("nuxt=", nuxt);
    const authStore = useAuthStore();

// Accessing getters and state
    //const { user, isLoggedIn } = storeToRefs(authStore);

    //await authStore.initAuth();
    //const store = useStore();
    // do stuff
    // const theme = useTheme();
    // const cnt = theme.name;
    // const test = myStore();
    // test.$patch({
    //   isReady: true
    // })
    // console.log("READY=", test.isReady);

    return {
      //theme
    }
  }
})

</script>
