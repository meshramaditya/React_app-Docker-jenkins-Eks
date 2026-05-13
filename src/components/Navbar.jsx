import { useCoursePlatform } from '../context/useCoursePlatform'

export function Navbar({ scrolled }) {
  const { appName, setCurrentPage, setSelectedCategory } = useCoursePlatform()

  const goToCourses = () => {
    setSelectedCategory('All', 'courses')
  }

  return (
    <header className={`topbar ${scrolled ? 'topbar--scrolled' : ''}`}>
      <button type="button" className="brand" onClick={() => setCurrentPage('home')}>
        <span className="brand__badge brand__badge--green">TL</span>
        <span className="brand__copy">
          <strong>{appName}</strong>
          <span>Internal learning hub</span>
        </span>
      </button>

      <nav className="nav" aria-label="Primary navigation">
        <button type="button" onClick={goToCourses}>
          Courses
        </button>
        <button type="button" onClick={() => setCurrentPage('about')}>
          About
        </button>
      </nav>
    </header>
  )
}