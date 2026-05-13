export function formatDuration(duration) {
  return duration
}

export function formatCategory(category) {
  return category
}

export function getLessonProgressLabel(progress) {
  return `${progress}% complete`
}export function normalizeText(value = '') {
  return value.trim().toLowerCase()
}

export function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export function formatSeatLabel(count) {
  return `${count} ${count === 1 ? 'seat' : 'seats'}`
}