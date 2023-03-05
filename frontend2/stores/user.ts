import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        user: {
            name: '',
            room: ''
        },
    }),
    getters: {
        userLogin(): string {
            return `${this.user.name}`;
        },
        userRoom(): string {
            return `${this.user.room}`;
        }
    },
    actions: {
        setUser(user) {
            this.user = user;
        },
        clearUser() {
            this.user = {
                name: '',
                room: ''
            };
        }
    },
});


