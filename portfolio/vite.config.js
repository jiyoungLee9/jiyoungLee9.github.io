import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

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
        additionalData: `@use "./src/assets/variables" as *;`
      }
    }
  }
})