<script setup>
// //import Login from "~/components/Login.vue";
// const userState = useState('user', () => ({}));
// userState.value = {};
//
// console.log("userState=", userState);
// const formData = {
//   userLogin: '',
//   roomName: '',
// };
//
// async function enter() {
//   const user = {
//     name: this.formData.userLogin,
//     room: this.formData.roomName,
//   };
//   //userStore.setUser(user);
//   //const userState = useState('user', () => (user));
//   //const userState = useState('user');
//   userState.value = user;
//   //const userState = useState('user', user);
//   // const userState = useState('user', () => ({
//   //   id: 3,
//   //   name: 'Michael',
//   //   profile: '...',
//   // }));
//   // console.log("userStore=", userStore.user);
//   console.log("userStore=", userState.value.user, userState.value.room);
//   await navigateTo('/chat');
// }
// /*export default {
//   components: {Login}
// }*/
</script>

<template>
  <div>
    <Login />
  </div>
</template>
