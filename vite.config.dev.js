import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'examples'),
  plugins: [vue()],
  server: {
    port: 8080,
    open: true
  },
  resolve: {
    alias: {
      // 保证 examples 里能正确引用到库源码
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  }
});
