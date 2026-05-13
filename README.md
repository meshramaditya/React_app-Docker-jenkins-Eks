# 🎓 TechLearn - Company Internal Course Platform

> A modern, production-ready Learning Management System with a clean, minimal industrial design

[![React](https://img.shields.io/badge/React-19.2.6-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8.0.12-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![Node](https://img.shields.io/badge/Node-18+-339933?style=flat-square&logo=node.js)](https://nodejs.org)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ed?style=flat-square&logo=docker)](https://www.docker.com)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=flat-square)](./README.md)

---

## ✨ Features

- 🎯 **Course Catalog** - Browse 15+ internal courses organized by technology domain
- 🔍 **Smart Filtering** - Filter courses by 5 categories (DSA, React, DevOps, System Design, UI/UX)
- 📚 **Rich Course Details** - View lessons, track progress, and monitor completion
- ✅ **Enrollment System** - Simple course enrollment with progress tracking
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎨 **Modern UI** - Industrial design with blue/purple color theme
- ⚡ **Fast & Lightweight** - 210KB bundle, 65KB gzipped
- 🐳 **Docker Ready** - One-command deployment with Nginx
- 🔒 **No External Dependencies** - Pure React, plain CSS, zero vendor UI libraries

---

## 🚀 Quick Start

### Prerequisites
```bash
Node.js 18+ | npm 9+
```

### Installation
```bash
# Navigate to project directory
cd react-docker-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app launches at **http://localhost:5173** with hot module reloading enabled.

---

## 📖 Available Scripts

```bash
npm run dev       # 🔧 Start Vite dev server with HMR
npm run build     # 📦 Build optimized production bundle
npm run lint      # 🔍 Check code quality with ESLint  
npm run preview   # 👁️  Preview production build locally
```

---

## 🏗️ Project Structure

```
src/
├── 📄 App.jsx                          # Root component & page router
├── 🎨 App.css                          # Component & layout styles (~500 lines)
├── 📝 index.css                        # Global styles & CSS variables
│
├── 🧩 components/                      # Reusable UI components (8 files)
│   ├── Navbar.jsx                      # Top navigation with scroll detection
│   ├── Hero.jsx                        # Landing hero section with CTA
│   ├── CategoryStrip.jsx               # Course category filter chips
│   ├── CourseCard.jsx                  # Individual course card display
│   ├── CourseDetails.jsx               # Course info + lessons panel
│   ├── ProgressBar.jsx                 # Visual progress indicator
│   ├── SectionHeader.jsx               # Reusable section header wrapper
│   └── StatusPanel.jsx                 # Loading/empty/error state panel
│
├── 📄 pages/                           # Full-page components (4 files)
│   ├── HomePage.jsx                    # Landing page (hero + featured)
│   ├── CoursesPage.jsx                 # Course catalog with category filters
│   ├── CourseDetailsPage.jsx           # Individual course details view
│   └── AboutPage.jsx                   # Platform information & features
│
├── 🔄 context/                         # React Context state (3 files)
│   ├── coursePlatformContext.js        # Context API definition
│   ├── CoursePlatformProvider.jsx      # Provider wrapper with useReducer
│   └── useCoursePlatform.js            # Custom hook for context access
│
├── 🔗 services/                        # Business logic & data (2 files)
│   ├── mockCourses.js                  # 15+ mock courses with full metadata
│   └── courseService.js                # Async course data fetcher
│
└── 🛠️  utils/                          # Helper utilities (3 files)
    ├── appConfig.js                    # Environment configuration loader
    ├── formatters.js                   # Price & label formatting functions
    └── date.js                         # Date utility helpers
```

---

## 🎯 Core Features Explained

### 📚 Course Management
- **15+ Mock Courses** across 5 technology categories
- **Real-time Filtering** by category
- **Rich Metadata**: Title, description, level, duration, price
- **Featured Courses** on homepage landing

### ✅ Enrollment & Progress
- **One-Click Enrollment** with instant confirmation  
- **Lesson Tracking** with interactive completion checkboxes
- **Progress Visualization** with animated progress bars
- **Auto-calculated Completion %** for each course

### 📱 Responsive Breakpoints
| Device | Width | Behavior |
|--------|-------|----------|
| Mobile | < 640px | Single-column, full-width buttons |
| Tablet | 640px-960px | 2-column grid, flexible stacking |
| Desktop | > 960px | 3-4 column grid, full features |

### 🎨 Design System

**Color Palette (Blue/Purple Industrial):**
```css
--primary: #2F2FE4           /* Vibrant Blue - Interactive elements */
--primary-700: #162E93       /* Deep Blue - Hover/active states */
--tertiary: #1A1953          /* Dark Purple - Secondary accents */
--background: #080616        /* Almost Black - Dark surfaces */
--surface: #FFFFFF           /* White - Clean backgrounds */
```

**Typography:**
- System font stack (Segoe UI, San Francisco, etc.)
- Semantic hierarchy via CSS variables
- 1.5 line-height for readability
- Optimized for accessibility

---

## 🧠 State Management

### CoursePlatformProvider Context

**Global State Structure:**
```javascript
{
  courses: Course[],                    // All available courses array
  currentPage: string,                  // Current view router state
  selectedCourse: Course | null,        // Active course for details
  isLoading: boolean,                   // Async operation flag
  error: string | null,                 // Error message container
  selectedCategory: string,             // Active filter category
  filteredCourses: Course[],           // Filtered results array
  enrolled: string[]                    // User enrolled course IDs
}
```

**Dispatch Actions:**
```javascript
const { dispatch } = useCoursePlatform()

// Navigate between pages
dispatch({ type: 'setCurrentPage', payload: 'courses' })

// Select course for detail view
dispatch({ type: 'selectCourse', payload: courseObject })

// Enroll in a course
dispatch({ type: 'enrollCourse', payload: courseId })

// Filter by category
dispatch({ type: 'setCategory', payload: 'React' })

// Load all courses
dispatch({ type: 'loadCourses' })

// Clear error message
dispatch({ type: 'clearError' })
```

---

## 📊 Mock Data Structure

### Course Object
```javascript
{
  id: string,                           // Unique identifier
  title: string,                        // Course name
  description: string,                  // Short course summary
  category: 'DSA' | 'React' | 'DevOps' | 'System Design' | 'UI/UX',
  level: 'Beginner' | 'Intermediate' | 'Advanced',
  duration: string,                     // e.g., "8 hours"
  price: number,                        // USD amount
  lessons: Lesson[],                    // Array of lesson objects
  enrolled: boolean                     // Enrollment status
}
```

### Lesson Object
```javascript
{
  title: string,                        // Lesson name
  completed: boolean                    // Completion flag
}
```

### Available Courses (5 Categories)
- **DSA**: Data Structures & Algorithms basics
- **React**: Modern React development patterns
- **DevOps**: Containerization & deployment
- **System Design**: Scalable architecture patterns
- **UI/UX**: Design principles & front-end practices

---

## 🔌 API Layer

### Course Service
```javascript
import { fetchCourses } from './services/courseService'

// Fetch all courses (async with configurable delay)
const courses = await fetchCourses()
```

**Features:**
- ✅ Promise-based async interface
- ✅ Configurable delay (default: 1200ms) via `VITE_SEARCH_DELAY_MS`
- ✅ Ready for real API integration
- ✅ Built-in error handling structure
- ✅ Mock data from `src/services/mockCourses.js`

---

## 🐳 Docker Deployment

### Quick Deploy
```bash
# Build Docker image
docker build -t techlearn:latest .

# Run container on port 80
docker run -p 80:80 techlearn:latest
```

Access at **http://localhost**

### Docker Architecture
- **Build Stage**: Node 18 image, npm install, production build
- **Runtime Stage**: Nginx Alpine (~12MB footprint)
- **SPA Routing**: Configured fallback to index.html
- **Performance**: Gzip compression, aggressive caching headers

### Dockerfile Structure
```dockerfile
# Stage 1: Build
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

---

## ⚙️ Configuration

### Environment Variables
Create `.env` file in project root:
```bash
# App Identity
VITE_APP_NAME=TechLearn
VITE_APP_TAGLINE=Company internal course platform

# API Simulation
VITE_SEARCH_DELAY_MS=1200
```

Access in code via `import.meta.env.VITE_*`

---

## 📈 Performance Metrics

| Metric | Value | Notes |
|--------|-------|-------|
| Bundle Size | 210 KB | Uncompressed |
| JS Gzipped | 65 KB | Production |
| CSS Gzipped | 2.3 KB | Minimal CSS |
| Dev Startup | < 1s | With Vite HMR |
| Build Time | ~450ms | Production build |
| Modules | 38 | Optimized bundles |

---

## 🌐 Browser Support

| Browser | Minimum Version | Notes |
|---------|-----------------|-------|
| Chrome | 90+ | Full support |
| Firefox | 88+ | Full support |
| Safari (macOS) | 14+ | Full support |
| Safari (iOS) | 14+ | Full support |
| Edge | 90+ | Full support |

---

## ✅ Quality Assurance

- ✅ **ESLint**: React hooks & best practices rules
- ✅ **React Fast Refresh**: Zero-state HMR in dev mode
- ✅ **Semantic HTML**: Proper heading hierarchy & structure
- ✅ **Accessibility**: WCAG AA color contrast ratios
- ✅ **Production Clean**: No console warnings or errors

Run checks:
```bash
npm run lint       # Check code quality
npm run build      # Verify production build
npm run preview    # Test production bundle locally
```

---

## 📚 Technology Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| **Runtime** | Node.js | 18+ |
| **Frontend** | React | 19.2.6 |
| **Build Tool** | Vite | 8.0.12 |
| **State Mgmt** | Context API | Built-in |
| **Styling** | CSS 3 | Plain/Variables |
| **Deployment** | Docker + Nginx | Latest |

---

## 🔄 Data Flow Architecture

```
User Interaction
    ↓
Component Event Handler
    ↓
useCoursePlatform() Hook
    ↓
dispatch() Action
    ↓
CoursePlatformProvider Reducer
    ↓
Update Context State
    ↓
All Subscribed Components Re-render
    ↓
UI Updates Reflect New State
```

---

## 🛣️ Navigation & Routing

```
Landing Page (/)
├─ Hero Section with CTA
├─ Featured Courses Grid
├─ "Explore All" → Courses Catalog
└─ "About" → About Page

Course Catalog (/courses)
├─ Category Filter Strip
├─ Filtered Course Grid
└─ Click Course → Course Details

Course Details (/course/:id)
├─ Course Description
├─ Lessons List with Checkboxes
├─ Progress Bar Visualization
├─ Enrollment Button
└─ Back to Catalog

About Page (/about)
└─ Platform Information & Features
```

---

## 🚀 Extending the Project

### ➕ Adding a New Course
Edit `src/services/mockCourses.js`:
```javascript
{
  id: 'unique-course-id',
  title: 'Advanced Node.js',
  description: 'Backend development with Node.js and Express',
  category: 'DevOps',
  level: 'Advanced',
  duration: '12 hours',
  price: 149,
  lessons: [
    { title: 'Introduction to Node.js', completed: false },
    { title: 'Express Framework Basics', completed: false },
    { title: 'Database Integration', completed: false }
  ],
  enrolled: false
}
```

### 🆕 Creating a New Page
```bash
1. Create file: src/pages/NewPage.jsx
2. Import useCoursePlatform for state access
3. Add route in src/App.jsx
4. Link from Navbar component
```

### 🧩 Building a Component
```bash
1. Place in src/components/
2. Import useCoursePlatform if needed
3. Use CSS classes from App.css
4. Reference CSS variables for colors
```

### 🔌 Switching to Real API
Replace `src/services/courseService.js`:
```javascript
export async function fetchCourses() {
  const response = await fetch('/api/courses')
  if (!response.ok) throw new Error('Failed to fetch courses')
  return response.json()
}
```

---

## 📝 Code Quality Standards

- Use functional components with React Hooks
- Leverage `useCoursePlatform()` for state access
- Follow semantic HTML structure
- Use CSS variables for consistency
- Test responsive design at 640px and 960px breakpoints
- Run `npm run lint` before committing

---

## 🗺️ Future Roadmap

- [ ] Real Backend API Integration
- [ ] User Authentication & Authorization
- [ ] Advanced Search & Filtering
- [ ] User Dashboard & Profile Management
- [ ] Course Reviews & Ratings System
- [ ] Community Discussion Forums
- [ ] Video Hosting Integration
- [ ] Certificate Generation & Tracking
- [ ] Analytics Dashboard
- [ ] Admin Panel for Course Management
- [ ] Learning Path Creation
- [ ] Notification System

---

## 🤝 Contributing

1. Create feature branches for new features
2. Maintain existing component structure
3. Follow current naming conventions
4. Test on mobile (640px) and tablet (960px)
5. Run lint and build checks
6. Document major changes in comments

---

## 📄 License

**Internal Use Only** - Proprietary to Company

---

## 💡 Support & Questions

For issues, questions, or feature requests, contact the Platform Development Team.

**Last Updated**: May 2026  
**Status**: ✅ Production Ready
