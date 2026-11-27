import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/_reset.scss'  // scss reset 모음
import './styles/_pages.scss'  // 페이지별 전역 테마 스타일 (page-{name} className)
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 원인 불명 오류 발생 시 header 없는 공통 오류 페이지로 대체 */}
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
