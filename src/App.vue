<script setup lang="ts">
import {sysStore} from "./store/sys-store.ts";
import {useI18n} from "vue-i18n";

const {locale, t} = useI18n();

</script>

<template>
  <div style="position:absolute;top:0;text-align:center;left: 50vw;transform: translateX(-50%);">
    <el-text>{{t('click_button_count')}} : {{ sysStore().clickCnt }}</el-text>
  </div>
  <router-view class="router-view"></router-view>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: rgba(0, 0, 0, 0.02);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

</style>