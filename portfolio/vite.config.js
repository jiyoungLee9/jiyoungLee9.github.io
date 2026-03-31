import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: [
          `@use "${path.resolve(__dirname, 'src/styles/_font').replace(/\\/g, '/')}" as *;`,
          `@use "${path.resolve(__dirname, 'src/styles/variables').replace(/\\/g, '/')}" as *;`,
        ].join('\n')
      }
    }
  },
})