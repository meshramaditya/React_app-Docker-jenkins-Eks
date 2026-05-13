const env = import.meta.env ?? {}

export const courseCategories = ['DSA', 'React', 'DevOps', 'System Design', 'UI/UX']

export const appConfig = {
  appName: env.VITE_APP_NAME ?? 'TechLearn - Company Internal Course Platform',
  tagline: env.VITE_APP_TAGLINE ?? 'Build skills through focused internal learning paths.',
  courseLoadDelay: Number(env.VITE_COURSE_LOAD_DELAY_MS ?? 850),
}