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
        // Windows 절대경로(C:/...)는 Sass가 URL 스킴으로 해석해 못 찾으므로 loadPaths 사용
        loadPaths: [path.resolve(__dirname, 'src/styles')],
        additionalData: [
          `@use "font" as *;`,
          `@use "variables" as *;`,
        ].join('\n')
      }
    }
  },
})