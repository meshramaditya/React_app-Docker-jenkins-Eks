import { useCoursePlatform } from '../context/useCoursePlatform'
import { CourseCard } from '../components/CourseCard'
import { SectionHeader } from '../components/SectionHeader'
import { CategoryStrip } from '../components/CategoryStrip'

export function CoursesPage() {
  const { filteredCourses, isLoading } = useCoursePlatform()

  return (
    <section className="page-stack">
      <section className="page-block">
        <SectionHeader
          eyebrow="Our Catalog"
          title="Explore all learning tracks"
          description="Browse our complete collection of courses designed for modern teams."
        />
        <CategoryStrip />
        {isLoading ? (
          <div className="loading-strip card-shell">Fetching courses...</div>
        ) : (
          <div className="course-grid">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>
    </section>
  )
}
