// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,               // если хочешь использовать глобальные функции Vitest
    environment: 'jsdom',        // для React Testing Library
    setupFiles: './src/vitest.setup.js' // вот здесь подключаем твой setup
  }
});