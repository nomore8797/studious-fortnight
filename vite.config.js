import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,                 // чтобы можно было использовать глобальные функции Vitest без импорта
    environment: 'jsdom',          // среда тестирования, нужна для React
    setupFiles: './vitest.setup.js', // файл для предварительной настройки тестов
    include: ['src/**/*.test.jsx'], // какие файлы тестов запускать
    coverage: {                     // опционально: отчёт по покрытию
      reporter: ['text', 'lcov']
    }
  }
})
