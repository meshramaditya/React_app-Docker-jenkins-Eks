import { useCoursePlatform } from '../context/useCoursePlatform'

export function CategoryStrip() {
  const { courseCategories, selectedCategory, setSelectedCategory } = useCoursePlatform()

  return (
    <section className="category-strip card-shell">
      {courseCategories.map((category) => (
        <button
          key={category}
          type="button"
          className={`category-chip ${selectedCategory === category ? 'category-chip--active' : ''}`}
          onClick={() => setSelectedCategory(category, 'courses')}
        >
          {category}
        </button>
      ))}
    </section>
  )
}