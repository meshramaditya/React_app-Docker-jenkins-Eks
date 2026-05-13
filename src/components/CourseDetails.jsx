import { ProgressBar } from './ProgressBar'
import { formatDuration } from '../utils/formatters'

export function CourseDetails({ course, isEnrolled, onEnroll, onBack }) {
  const completedLessons = Math.max(1, Math.round((course.progress / 100) * course.lessons.length))

  return (
    <section className="details-layout">
      <article className="details-card card-shell">
        <div className="details-card__header">
          <div>
            <p className="eyebrow">Course details</p>
            <h2>{course.title}</h2>
          </div>
          <span className="details-pill">{course.category}</span>
        </div>

        <p className="details-card__description">{course.description}</p>

        <div className="details-stats">
          <div>
            <span>Level</span>
            <strong>{course.level}</strong>
          </div>
          <div>
            <span>Duration</span>
            <strong>{formatDuration(course.duration)}</strong>
          </div>
          <div>
            <span>Lessons</span>
            <strong>{course.lessons.length}</strong>
          </div>
        </div>

        <ProgressBar progress={isEnrolled ? 100 : course.progress} />

        <div className="lesson-list">
          {course.lessons.map((lesson, index) => {
            const completed = index < completedLessons || isEnrolled

            return (
              <div key={lesson.title} className={`lesson-item ${completed ? 'lesson-item--done' : ''}`}>
                <div>
                  <strong>{lesson.title}</strong>
                  <span>{lesson.duration}</span>
                </div>
                <span className="lesson-item__status">{completed ? 'Done' : 'Upcoming'}</span>
              </div>
            )
          })}
        </div>

        <div className="details-card__actions">
          <button type="button" className="button button--primary" onClick={onEnroll}>
            {isEnrolled ? 'Enrolled' : 'Enroll'}
          </button>
          <button type="button" className="button button--secondary" onClick={onBack}>
            Back to Courses
          </button>
        </div>
      </article>

      <aside className="details-sidebar card-shell">
        <p className="eyebrow">Learning path</p>
        <h3>What this track covers</h3>
        <ul>
          <li>Structured lessons for internal skill growth.</li>
          <li>Company-friendly pacing and clear outcomes.</li>
          <li>Simple progress tracking for learners.</li>
        </ul>
      </aside>
    </section>
  )
}