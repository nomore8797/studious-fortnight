import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import '@testing-library/jest-dom';
    setupFiles: resolve(__dirname, 'src/vitest.setup.js'),
  },
});

