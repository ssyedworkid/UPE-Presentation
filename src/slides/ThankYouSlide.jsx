import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function ThankYouSlide() {
  return (
    <section className="thankyou-slide">
      <h2 className="slide-headline" style={{ fontSize: "4em" }}>
        Let's talk.
      </h2>

      <div className="contact-row">
        <div className="contact-person">
          <span className="contact-name">Suhaan</span>
          <a
            href="https://www.linkedin.com/in/suhaansyed/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
            linkedin.com/in/suhaansyed
          </a>
        </div>
        <div className="contact-person">
          <span className="contact-name">Siddh</span>
          <a
            href="https://www.linkedin.com/in/siddhbharucha/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-link"
            style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
            linkedin.com/in/siddhbharucha
          </a>
        </div>
      </div>

      <p style={{ marginTop: "2em", color: "var(--text-secondary)", fontSize: "1.2em" }}>
        Suhaan & Siddh | UPE
      </p>
    </section>
  );
}
