import { CategoryStrip } from '../components/CategoryStrip'
import { CourseCard } from '../components/CourseCard'
import { Hero } from '../components/Hero'
import { SectionHeader } from '../components/SectionHeader'
import { useCoursePlatform } from '../context/useCoursePlatform'

export function HomePage() {
  const { featuredCourses, isLoading } = useCoursePlatform()

  return (
    <section className="page-stack">
      <Hero />
      <CategoryStrip />

      <section className="page-block">
        <SectionHeader
          eyebrow="Featured learning"
          title="Courses built for company growth"
          description="Focused tracks for engineers, designers, and platform teams with a clean internal experience."
        />

        {isLoading ? (
          <div className="loading-strip card-shell">Preparing the course catalog...</div>
        ) : (
          <div className="course-grid course-grid--featured">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} featured />
            ))}
          </div>
        )}
      </section>
    </section>
  )
}