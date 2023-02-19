import { defineStore } from 'pinia';
import * as moment from 'moment';

export const useChatStore = defineStore('chatStore', {
    state: () => ({
        list: [],
    }),
    getters: {
    },
    actions: {
        addMessage(msgData) {
            this.list.push({
                "msg": msgData.msg,
                "name": msgData.name,
                "date": moment().format('MM DD YYYY, hh:mm:ss'),
                "is_mine": msgData.is_mine,
            });
        },
    },
});


