import { useCoursePlatform } from '../context/useCoursePlatform'

export function Hero() {
  const { setCurrentPage, setSelectedCategory } = useCoursePlatform()

  return (
    <section className="hero-card">
      <div className="hero-card__content">
        <p className="eyebrow">Company learning platform</p>
        <h1>TechLearn helps teams build skills with focused internal courses.</h1>
        <p>
          A minimal, modern company course platform for technical growth, designed for clarity,
          trust, and everyday use across engineering and product teams.
        </p>

        <div className="hero-card__actions">
          <button type="button" className="button button--primary" onClick={() => setCurrentPage('courses')}>
            Explore Courses
          </button>
          <button type="button" className="button button--secondary" onClick={() => setCurrentPage('about')}>
            About Platform
          </button>
        </div>
      </div>

      <div className="hero-card__panel">
        <div className="hero-stat">
          <strong>5 core tracks</strong>
          <span>DSA, React, DevOps, System Design, UI/UX</span>
        </div>
        <div className="hero-stat">
          <strong>Simple enrollment</strong>
          <span>Start learning in one clear action</span>
        </div>
        <div className="hero-stat">
          <strong>Internal focus</strong>
          <span>Clean, company-ready learning experience</span>
        </div>
        <button
          type="button"
          className="hero-chip"
          onClick={() => {
            setSelectedCategory('React', 'courses')
          }}
        >
          View React track
        </button>
      </div>
    </section>
  )
}