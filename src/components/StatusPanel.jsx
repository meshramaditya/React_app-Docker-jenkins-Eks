export function StatusPanel({ title, description, actionLabel, onAction }) {
  return (
    <section className="status-panel card-shell">
      <p className="eyebrow">TechLearn</p>
      <h2>{title}</h2>
      <p>{description}</p>
      {onAction ? (
        <button type="button" className="button button--primary" onClick={onAction}>
          {actionLabel}
        </button>
      ) : null}
    </section>
  )
}