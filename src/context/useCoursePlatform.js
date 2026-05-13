import { useContext } from 'react'
import { CoursePlatformContext } from './coursePlatformContext'

export function useCoursePlatform() {
  const context = useContext(CoursePlatformContext)

  if (!context) {
    throw new Error('useCoursePlatform must be used within CoursePlatformProvider')
  }

  return context
}