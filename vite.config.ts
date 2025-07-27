// vite.config.ts
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/rs-lysenko-react',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.ts',
    coverage: {
      reporter: ['text', 'html'],
      thresholds: {
        global: {
          statements: 80,
          branches: 50,
          functions: 50,
          lines: 50,
        },
      },
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        '**/node_modules/**',
        '**/dist/**',
        '**/*.test.{ts,tsx}',
        '**/*.spec.{ts,tsx}',
        '**/*.d.ts',
        '**/vite-env.d.ts',
        '**/vite.config.{ts,js}',
        '**/eslint.config.{ts,js}',
        '**/src/tests/**',
        '**/src/test-utils/**',
        '**/__mocks__/**',
        '**/*.stories.{ts,tsx}',
        '**/src/constants/**',
        '**/src/types/**',
        '**/src/main.tsx',
        '**/src/index.tsx',
        '**/src/App.tsx',
        '**/src/tests/setup.ts',
      ],
    },
  },
});
