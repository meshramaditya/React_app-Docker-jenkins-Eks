import { SectionHeader } from '../components/SectionHeader'

export function AboutPage() {
  return (
    <section className="page-stack">
      <section className="page-block page-block--compact">
        <SectionHeader
          eyebrow="About TechLearn"
          title="A clean internal platform for continuous learning"
          description="Built to help teams learn faster with an interface that feels calm, professional, and company-ready."
        />
      </section>

      <div className="about-grid">
        <article className="info-card card-shell">
          <h3>Why it exists</h3>
          <p>
            TechLearn gives employees a focused place to explore internal learning tracks without
            unnecessary visual noise or external UI dependencies.
          </p>
        </article>

        <article className="info-card card-shell">
          <h3>What teams get</h3>
          <ul>
            <li>Curated paths for engineering and design teams</li>
            <li>Simple course discovery and enrollment</li>
            <li>Readable progress tracking and clean spacing</li>
          </ul>
        </article>

        <article className="info-card card-shell">
          <h3>Design approach</h3>
          <p>
            The UI uses a light green palette, subtle gradients, minimal shadows, and consistent
            components so it feels polished in both desktop and mobile contexts.
          </p>
        </article>
      </div>
    </section>
  )
}