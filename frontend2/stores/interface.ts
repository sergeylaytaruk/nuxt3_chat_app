import { defineStore } from 'pinia';

export const useInterfaceStore = defineStore('interfaceStore', {
    state: () => ({
        leftDrawerOpen: true,
    }),
    getters: {
    },
    actions: {
        toggleLeftDrawer() {
            this.leftDrawerOpen = !this.leftDrawerOpen;
        },
    },
});


