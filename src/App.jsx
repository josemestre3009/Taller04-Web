import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './views/Home'
import CoursesView from './views/CoursesView'
import About from './views/About'
import Login from './views/Login'
import NotFound from './views/NotFound'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cursos" element={<CoursesView />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
