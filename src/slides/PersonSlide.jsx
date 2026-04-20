import { useState } from "react";

export default function PersonSlide({ person }) {
  const [imgError, setImgError] = useState(false);
  const isPlaceholder = (text) => text.startsWith("[Siddh to fill");

  return (
    <section>
      <div className="person-slide">
        <div className="person-left">
          <div className="person-photo">
            {!imgError ? (
              <img
                src={person.photo}
                alt={person.name}
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="person-initials">
                {person.name.charAt(0)}
              </span>
            )}
          </div>
          <h2 className="slide-headline" style={{ fontSize: "2.2em", marginBottom: 0 }}>
            {person.headline}
          </h2>
          <ul className="slide-bullets" style={{ textAlign: "left" }}>
            {person.bullets.map((b, i) => (
              <li key={i} style={{ fontSize: "1.05em" }}>
                {isPlaceholder(b) ? (
                  <span className="placeholder">{b}</span>
                ) : (
                  b
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="person-right">
          <div className="person-cards">
            {person.cards.map((card, i) => (
              <div className="card fragment fade-up" key={i}>
                <div className="card-title">
                  {isPlaceholder(card.title) ? (
                    <span className="placeholder">{card.title}</span>
                  ) : (
                    card.title
                  )}
                </div>
                <div className="card-desc">
                  {isPlaceholder(card.description) ? (
                    <span className="placeholder">{card.description}</span>
                  ) : (
                    card.description
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="tech-tags">
            {person.techTags.map((tag, i) => (
              <span className="tech-tag" key={i}>
                {isPlaceholder(tag) ? (
                  <span className="placeholder" style={{ border: "none", background: "none", padding: 0, color: "var(--placeholder-border)" }}>
                    {tag}
                  </span>
                ) : (
                  tag
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
