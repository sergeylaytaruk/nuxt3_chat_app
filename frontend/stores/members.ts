import { defineStore } from 'pinia';
import * as moment from 'moment';

export const useMembersStore = defineStore('membersStore', {
    state: () => ({
        list: [],
    }),
    getters: {
    },
    actions: {
        addMember(user) {
            this.list.push({
                "name": user.name,
                //"date": moment().format('MM DD YYYY, hh:mm:ss'),
            });
        },
        refreshList(members) {
            this.list = members;
        }
    },
});


