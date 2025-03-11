<script setup lang="ts">
import {useI18n} from "vue-i18n";
import router from "@/router";
import {sysStore} from "@/store/sys-store.ts";

const {t} = useI18n();
</script>

<template>
  <div class="container">
    <h1>{{ t('child_page_2') }}</h1>
    <el-button @click="router.push('/');sysStore().clickCnt++">{{ t('back') }}</el-button>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 40vh;
}
</style>