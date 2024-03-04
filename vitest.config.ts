import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: ['./mocks/setup.ts'],
    coverage: {
      include: ['src/**/*.ts'],
      provider: 'v8'
    }
  },
})