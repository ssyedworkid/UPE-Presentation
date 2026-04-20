export default function BulletSlide({
  headline,
  bullets,
  numbered,
  finalLine,
  hasPlaceholder,
  sectionTitle,
}) {
  const isPlaceholder = (text) =>
    text.includes("[Siddh to fill") || text.includes("[Siddh to elaborate");

  return (
    <section>
      {sectionTitle && (
        <p className="slide-subtitle" style={{ fontSize: "1em", fontWeight: 600, color: "var(--accent-cyan)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.3em" }}>
          {sectionTitle}
        </p>
      )}
      <h2 className="slide-headline" style={{ fontSize: "2.4em" }}>
        {headline}
      </h2>
      <ul className={`slide-bullets ${numbered ? "numbered" : ""}`}>
        {bullets.map((b, i) => (
          <li key={i} className="fragment fade-up">
            {isPlaceholder(b) ? (
              <>
                {b.split(/(\[Siddh to [^\]]+\])/).map((part, j) =>
                  part.match(/\[Siddh to/) ? (
                    <span className="placeholder" key={j}>{part}</span>
                  ) : (
                    <span key={j}>{part}</span>
                  )
                )}
              </>
            ) : (
              b
            )}
          </li>
        ))}
      </ul>
      {finalLine && (
        <p className="final-line fragment fade-up">{finalLine}</p>
      )}
    </section>
  );
}
