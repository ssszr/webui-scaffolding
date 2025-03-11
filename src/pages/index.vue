<script setup lang="ts">
import {useI18n} from "vue-i18n";
import {sysStore} from "../store/sys-store.ts";
import router from "@/router";

const {locale, t} = useI18n();

const switchLanguage = (lang: string) => {
  locale.value = lang; // 切换语言
};

</script>

<template>
  <el-card class="container">
    <h1>{{ t('home_title') }}</h1>
    <p>{{ sysStore().appVersion }}</p>
  </el-card>
  <div class="btn-container">
    <el-button @click="router.push('child1');sysStore().clickCnt++">{{ t('child_page_1') }}</el-button>
    <el-button @click="router.push('child2');sysStore().clickCnt++">{{ t('child_page_2') }}</el-button>
  </div>
  <div class="lan-container">
    <el-button @click="switchLanguage('en');sysStore().clickCnt++">Switch to English</el-button>
    <el-button @click="switchLanguage('zh');sysStore().clickCnt++">切换为中文</el-button>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 40vh;
}

.btn-container {
  text-align: center;
  margin-top: 20px;
}

.lan-container {
  text-align: center;
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>