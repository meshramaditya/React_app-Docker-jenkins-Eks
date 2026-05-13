export function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-header section-header--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}