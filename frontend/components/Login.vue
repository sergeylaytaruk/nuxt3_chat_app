<script setup>
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();
userStore.clearUser();
const formData = {
  userLogin: '',
  roomName: '',
};

function enter() {
  const user = {
    name: this.formData.userLogin,
    room: this.formData.roomName,
  };
  userStore.setUser(user);
  console.log("userStore=", userStore.user.name, userStore.userLogin);
  navigateTo('/chat');
}
async function goToChat() {
  //await navigateTo('/chat');
}
</script>

<template>
  <div>
    <div class="row">
      <div class="col-md-6 offset-md-3">

        <div class="card card-outline-secondary">
          <div class="card-header">
            <h3 class="mb-0">Login</h3>
          </div>
          <div class="card-body">
            <!-- FORM -->
            <div class="form-group">
              <label class="form-label">Username</label>
              <input type="text" class="form-control" name="userLogin"
                     v-model="formData.userLogin"
              >
            </div>
            <div class="form-group">
              <label class="form-label">Room</label>
              <input type="text" class="form-control" name="roomName"
                     v-model="formData.roomName"
              >
            </div>

            <!--            <div class="form-group">-->
            <!--              <label class="form-label">Username</label>-->
            <!--              <input v-model="username" placeholder="Username" />-->
            <!--            </div>-->

            <!-- /FORM -->
          </div>
        </div>

      </div>
    </div>

    <div class="row">
      <div class="col-md-6 offset-md-3 mt-3">
        <div class="form-group my-3">
          <button @click="enter()" class="btn btn-success" >Sign in</button>
        </div>
        <div class="form-group">
          <NuxtLink to="/chat">chat page</NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>
