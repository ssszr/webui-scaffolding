import { defineConfig } from 'vite'
import VueRouter from 'unplugin-vue-router/vite';
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import * as path from "node:path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter({}),
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  base: './',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
