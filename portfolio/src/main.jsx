import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/_reset.scss'  // scss reset 모음
import './styles/_pages.scss'  // 페이지별 전역 테마 스타일 (page-{name} className)
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
