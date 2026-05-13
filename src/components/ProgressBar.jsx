import { getLessonProgressLabel } from '../utils/formatters'

export function ProgressBar({ progress }) {
  return (
    <div className="progress-panel">
      <div className="progress-panel__meta">
        <span>Progress</span>
        <strong>{getLessonProgressLabel(progress)}</strong>
      </div>
      <div className="progress-track" aria-hidden="true">
        <span className="progress-track__fill" style={{ width: `${progress}%` }} />
      </div>
    </div>
  )
}