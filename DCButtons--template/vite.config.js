import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// Replace 'dcbuttons--template' with your actual repository name
export default defineConfig({
  plugins: [vue()],
  base: '/dcbuttons--template/',
});
