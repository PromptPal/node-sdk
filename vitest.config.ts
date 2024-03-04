import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    setupFiles: ['./mocks/setup.ts'],
    coverage: {
      provider: 'v8'
    }
  },
})