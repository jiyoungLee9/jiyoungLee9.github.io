import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import fs from 'fs'

// GitHub Pages SPA 대응
// Pages는 없는 경로(/about-me 등 직접 접속·새로고침)에 404.html 을 응답하므로
// 빌드 후 index.html 을 404.html 로 복사해 React Router 가 경로를 처리하게 함
const spaFallback404 = () => {
  let outDir = ''
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir)
    },
    closeBundle() {
      fs.copyFileSync(path.join(outDir, 'index.html'), path.join(outDir, '404.html'))
    },
  }
}

export default defineConfig({
  plugins: [react(), spaFallback404()],
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