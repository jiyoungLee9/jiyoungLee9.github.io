import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: '../docs',
    emptyOutDir: false,  // docs/ 하위의 react_learning_log 등 별도 관리 폴더 보존
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