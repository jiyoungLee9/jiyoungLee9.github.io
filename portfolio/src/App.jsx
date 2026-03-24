import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import AboutMe from './pages/AboutMe/AboutMe'
import Skills from './pages/Skills/Skills'
import Works from './pages/Works/Works'
import Philosophy from './pages/Philosophy/Philosophy'
import Resume from './pages/Resume/Resume'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutMe />} />
          <Route path="skills" element={<Skills />} />
          <Route path="works" element={<Works />} />
          <Route path="philosophy" element={<Philosophy />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App