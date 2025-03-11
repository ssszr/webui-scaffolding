import {defineStore} from "pinia";
import {ref} from "vue";

export const sysStore = defineStore('sys-store', () => {
    const appVersion = ref('V1.0.0');

    const clickCnt = ref(0)

    return {
        appVersion, clickCnt
    }
});