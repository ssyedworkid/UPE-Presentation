export default function TimelineSlide({ data }) {
  const maxHeight = 150;

  return (
    <section>
      <p className="slide-subtitle" style={{ fontSize: "1em", fontWeight: 600, color: "var(--accent-cyan)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.3em" }}>
        How do you find impactful work?
      </p>
      <h2 className="slide-headline" style={{ fontSize: "2.2em" }}>
        Most of our work gets handed to us. That's fine — for now.
      </h2>

      <div className="timeline-track">
        {data.stages.map((stage, i) => (
          <div
            className={`timeline-stage ${i > 0 ? "fragment fade-up" : ""}`}
            data-fragment-index={i > 0 ? i - 1 : undefined}
            key={i}
          >
            <div className="timeline-label">{stage.label}</div>
            <div className="timeline-bar-group">
              <div
                className="timeline-bar assigned"
                style={{ height: `${(stage.assigned / 100) * maxHeight}px` }}
              >
                {stage.assigned}%
              </div>
              <div
                className="timeline-bar self"
                style={{ height: `${(stage.self / 100) * maxHeight}px` }}
              >
                {stage.self}%
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="timeline-arrow fragment" data-fragment-index="1">
        → gradual, intentional ownership
      </p>

      <ul className="slide-bullets timeline-tips" style={{ marginTop: "1em" }}>
        {data.tips.map((tip, i) => (
          <li key={i} className="fragment fade-up" data-fragment-index={i + 2}>
            {tip}
          </li>
        ))}
      </ul>
    </section>
  );
}
