// src/components/ErrorBoundary/ErrorBoundary.jsx
// 앱 전체를 감싸 렌더링 중 발생한 예외를 잡아 공통 오류 페이지로 대체
// (React 의 오류 경계는 클래스 컴포넌트로만 작성 가능)
import { Component } from 'react'
import ErrorPage from '../../pages/ErrorPage/ErrorPage'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // 원인 확인용 — 브라우저 개발자도구 콘솔에 기록
    console.error('[ErrorBoundary]', error, info?.componentStack)
  }

  render() {
    if (this.state.hasError) return <ErrorPage />
    return this.props.children
  }
}

export default ErrorBoundary
