import { useCoursePlatform } from '../context/useCoursePlatform'
import { CourseDetails } from '../components/CourseDetails'

export function CourseDetailsPage() {
  const { dispatch, selectedCourse, enrollSelectedCourse } = useCoursePlatform()

  if (!selectedCourse) {
    return (
      <section className="page-stack">
        <section className="page-block details-layout">
          <button
            type="button"
            onClick={() => dispatch({ type: 'SET_PAGE', page: 'courses' })}
            className="back-button"
          >
            ← Back to Courses
          </button>
          <div className="card-shell">
            <p className="eyebrow">Course details</p>
            <h2>Select a course to view details.</h2>
            <p className="details-card__description">
              The course data is still loading or the selected course could not be found.
            </p>
          </div>
        </section>
      </section>
    )
  }

  return (
    <section className="page-stack">
      <section className="page-block details-layout">
        <button type="button" onClick={() => dispatch({ type: 'SET_PAGE', page: 'courses' })} className="back-button">
          ← Back to Courses
        </button>
        <CourseDetails
          course={selectedCourse}
          isEnrolled={Boolean(selectedCourse.enrolled)}
          onEnroll={enrollSelectedCourse}
          onBack={() => dispatch({ type: 'SET_PAGE', page: 'courses' })}
        />
      </section>
    </section>
  )
}
