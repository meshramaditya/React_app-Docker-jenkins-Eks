import { mockCourses } from './mockCourses'
import { appConfig } from '../utils/appConfig'

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function fetchCourseCatalog() {
  await wait(appConfig.courseLoadDelay)

  return mockCourses.map((course) => ({
    ...course,
    lessons: course.lessons.map((lesson) => ({ ...lesson })),
  }))
}