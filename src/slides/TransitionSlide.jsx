import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faFileAlt,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  search: faSearch,
  document: faFileAlt,
  advocate: faBullhorn,
};

export default function TransitionSlide({
  headline,
  subtitle,
  items,
  accentPhrase,
}) {
  const renderHeadline = () => {
    if (!accentPhrase) return headline;
    const parts = headline.split(accentPhrase);
    return (
      <>
        {parts[0]}
        <span className="accent-cyan">{accentPhrase}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="transition-slide">
      <h2 className="slide-headline" style={{ fontSize: "3em" }}>
        {renderHeadline()}
      </h2>
      {subtitle && (
        <p className="slide-subtitle fragment fade-up">{subtitle}</p>
      )}
      {items && (
        <div className="transition-items">
          {items.map((item, i) => (
            <div className="transition-item fragment fade-up" key={i}>
              <span className="transition-icon">
                {item.faIcon ? (
                  <FontAwesomeIcon
                    icon={iconMap[item.faIcon]}
                    style={{ color: "var(--accent-blue)" }}
                  />
                ) : (
                  item.icon
                )}
              </span>
              <span className="transition-text">{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
