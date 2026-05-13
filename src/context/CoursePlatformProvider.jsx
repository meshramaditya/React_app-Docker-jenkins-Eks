import { useEffect, useMemo, useReducer } from 'react'
import { fetchCourseCatalog } from '../services/courseService'
import { appConfig, courseCategories } from '../utils/appConfig'
import { CoursePlatformContext } from './coursePlatformContext'

const initialState = {
  currentPage: 'home',
  selectedCategory: 'All',
  selectedCourseId: null,
  courses: [],
  isLoading: true,
  error: '',
  lastAction: '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.page,
      }
    case 'SET_CATEGORY':
      return {
        ...state,
        selectedCategory: action.category,
        currentPage: action.page ?? state.currentPage,
      }
    case 'SET_COURSE':
      return {
        ...state,
        selectedCourseId: action.courseId,
        currentPage: 'details',
        lastAction: 'course-selected',
      }
    case 'LOAD_START':
      return {
        ...state,
        isLoading: true,
        error: '',
      }
    case 'LOAD_SUCCESS':
      return {
        ...state,
        isLoading: false,
        courses: action.courses,
        error: '',
      }
    case 'LOAD_ERROR':
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case 'ENROLL_SELECTED_COURSE':
      return {
        ...state,
        courses: state.courses.map((course) =>
          course.id === state.selectedCourseId
            ? {
                ...course,
                progress: 100,
                enrolled: true,
              }
            : course,
        ),
        lastAction: 'enrolled',
      }
    default:
      return state
  }
}

export function CoursePlatformProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    let active = true

    dispatch({ type: 'LOAD_START' })

    fetchCourseCatalog()
      .then((courses) => {
        if (!active) {
          return
        }

        dispatch({ type: 'LOAD_SUCCESS', courses })
      })
      .catch((error) => {
        if (!active) {
          return
        }

        dispatch({
          type: 'LOAD_ERROR',
          error: error.message || 'Unable to load the course catalog.',
        })
      })

    return () => {
      active = false
    }
  }, [])

  const selectedCourse = useMemo(
    () => state.courses.find((course) => course.id === state.selectedCourseId) ?? null,
    [state.courses, state.selectedCourseId],
  )

  const featuredCourses = useMemo(() => state.courses.slice(0, 3), [state.courses])

  const filteredCourses = useMemo(() => {
    if (state.selectedCategory === 'All') {
      return state.courses
    }

    return state.courses.filter((course) => course.category === state.selectedCategory)
  }, [state.courses, state.selectedCategory])

  const enrolledCourseIds = useMemo(
    () => state.courses.filter((course) => course.enrolled).map((course) => course.id),
    [state.courses],
  )

  const value = {
    ...state,
    appName: appConfig.appName,
    appTagline: appConfig.tagline,
    courseCategories,
    featuredCourses,
    filteredCourses,
    selectedCourse,
    enrolledCourseIds,
    setCurrentPage: (page) => dispatch({ type: 'SET_PAGE', page }),
    setSelectedCategory: (category, page) =>
      dispatch({ type: 'SET_CATEGORY', category, page }),
    setSelectedCourse: (courseId) => dispatch({ type: 'SET_COURSE', courseId }),
    enrollSelectedCourse: () => dispatch({ type: 'ENROLL_SELECTED_COURSE' }),
  }

  return <CoursePlatformContext.Provider value={value}>{children}</CoursePlatformContext.Provider>
}