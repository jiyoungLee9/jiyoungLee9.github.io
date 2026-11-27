import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import Home from './pages/Home/Home'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import Works from './pages/Works/Works'
import Philosophy from './pages/Philosophy/Philosophy'
import Resume from './pages/Resume/Resume'
import NotFound from './pages/NotFound/NotFound'

// [개발 서버 전용] 공통 오류 페이지 확인용 — /__error-test 접속 시 강제로 오류 발생
// import.meta.env.DEV 는 npm run dev 에서만 true → 배포 빌드에는 라우트가 생기지 않음
const ErrorTest = () => {
  throw new Error('공통 오류 페이지 확인용 테스트 오류')
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="works" element={<Works />} />
          <Route path="philosophy" element={<Philosophy />} />
          <Route path="resume" element={<Resume />} />
          {import.meta.env.DEV && <Route path="__error-test" element={<ErrorTest />} />}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App