import { formatDuration } from '../utils/formatters'
import { useCoursePlatform } from '../context/useCoursePlatform'

export function CourseCard({ course, featured = false }) {
  const { setSelectedCourse, setCurrentPage, enrolledCourseIds } = useCoursePlatform()
  const isEnrolled = enrolledCourseIds.includes(course.id)

  return (
    <article className={`course-card ${featured ? 'course-card--featured' : ''}`}>
      {course.image && (
        <img
          src={course.image}
          alt={course.category}
          className="course-card__image"
          loading="lazy"
          onError={(e) => {
            // if image fails, replace with neutral placeholder
            e.currentTarget.onerror = null
            e.currentTarget.src = '/images/react.svg'
            console.warn('Course image failed to load, fallback used:', course.image)
          }}
        />
      )}

      <div className="course-card__top">
        <span className="course-card__category">{course.category}</span>
        <span className={`course-card__level course-card__level--${course.level.toLowerCase()}`}>
          {course.level}
        </span>
      </div>

      <h3>{course.title}</h3>
      <p>{course.description}</p>

      <dl className="course-card__meta">
        <div>
          <dt>Duration</dt>
          <dd>{formatDuration(course.duration)}</dd>
        </div>
        <div>
          <dt>Audience</dt>
          <dd>{course.highlight}</dd>
        </div>
      </dl>

      <div className="course-card__actions">
        <button
          type="button"
          className="button button--primary"
          onClick={() => {
            setSelectedCourse(course.id)
            // fallback to ensure navigation updates if needed
            setCurrentPage('details')
          }}
        >
          {isEnrolled ? 'Continue Learning' : 'Start Learning'}
        </button>
        {isEnrolled ? <span className="course-card__badge">Enrolled</span> : null}
      </div>
    </article>
  )
}