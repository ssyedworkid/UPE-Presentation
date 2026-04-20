import { useState } from "react";

function PersonHalf({ person }) {
  const [imgError, setImgError] = useState(false);
  const [logoError, setLogoError] = useState(false);
  const isPlaceholder = (text) => text.startsWith("[Siddh to fill");

  return (
    <div className="dual-person-half">
      <div className="dual-person-header">
        <div className="dual-person-photo">
          {!imgError ? (
            <img
              src={person.photo}
              alt={person.name}
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="person-initials">{person.name.charAt(0)}</span>
          )}
        </div>
        <div className="dual-person-header-text">
          <h3 className="dual-person-name">Hi, I'm {person.name}.</h3>
          {!logoError && (
            <img
              className="dual-person-logo"
              src={person.logo}
              alt="company logo"
              onError={() => setLogoError(true)}
            />
          )}
        </div>
      </div>

      <ul className="slide-bullets dual-person-bullets">
        {person.bullets.map((b, i) => (
          <li key={i}>
            {isPlaceholder(b) ? (
              <span className="placeholder">{b}</span>
            ) : (
              b
            )}
          </li>
        ))}
      </ul>

      <div className="dual-person-cards">
        {person.cards.map((card, i) => (
          <div className="card dual-card" key={i}>
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
              <span style={{ color: "var(--placeholder-border)" }}>{tag}</span>
            ) : (
              tag
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function DualPersonSlide({ left, right }) {
  return (
    <section>
      <div className="dual-person-layout">
        <PersonHalf person={left} />
        <div className="dual-person-divider" />
        <PersonHalf person={right} />
      </div>
    </section>
  );
}
