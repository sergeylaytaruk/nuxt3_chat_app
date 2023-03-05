//import { Modal } from 'bootstrap';
import { useUserStore } from "~/stores/user";
const userStore = useUserStore();

function launchDemoModal() {
    alert('Sorry, you need to fill your login and room.');
}

export default defineNuxtRouteMiddleware((to, from) => {
    if (userStore.user.name.length == 0 || userStore.user.room.length == 0) {
        process.client && launchDemoModal();
        return navigateTo('/');
    }
});
