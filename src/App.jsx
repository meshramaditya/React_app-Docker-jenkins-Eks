import { useEffect, useState } from 'react'
import { CoursePlatformProvider } from './context/CoursePlatformProvider'
import { useCoursePlatform } from './context/useCoursePlatform'
import { appConfig } from './utils/appConfig'
import { Navbar } from './components/Navbar'
import { HomePage } from './pages/HomePage'
import { CoursesPage } from './pages/CoursesPage'
import { CourseDetailsPage } from './pages/CourseDetailsPage'
import { AboutPage } from './pages/AboutPage'
import './App.css'

function AppShell() {
  const { currentPage } = useCoursePlatform()
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    document.title = appConfig.appName
  }, [])

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="app-shell">
      <Navbar scrolled={hasScrolled} />

      <main className="layout">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'courses' && <CoursesPage />}
        {currentPage === 'details' && <CourseDetailsPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>

      <footer className="footer">
        <p>{appConfig.tagline}</p>
        <p>Built for internal learning, local development, and Docker deployment.</p>
      </footer>
    </div>
  )
}

function App() {
  return (
    <CoursePlatformProvider>
      <AppShell />
    </CoursePlatformProvider>
  )
}

export default App
