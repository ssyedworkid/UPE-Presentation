import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarCheck,
  faEnvelope,
  faChartLine,
  faArrowRight,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

const weeks = ["W1", "W2", "W3", "W4", "W48", "W49", "W50", "W52"];

export default function AdvocateSlide() {
  return (
    <section>
      <p
        className="slide-subtitle"
        style={{
          fontSize: "1em",
          fontWeight: 600,
          color: "var(--accent-cyan)",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginBottom: "0.3em",
        }}
      >
        How do you advocate?
      </p>
      <h2 className="slide-headline" style={{ fontSize: "2.2em" }}>
        Your manager can't advocate for work they don't know about.
      </h2>

      {/* Weekly rhythm row */}
      <div className="fragment fade-up" data-fragment-index="0">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginTop: "1em",
            background: "var(--bg-card)",
            borderRadius: 16,
            padding: "24px 32px",
            border: "1px solid rgba(59,130,246,0.15)",
          }}
        >
          <FontAwesomeIcon
            icon={faCalendarCheck}
            style={{ fontSize: "2.4em", color: "var(--accent-blue)", flexShrink: 0 }}
          />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "1.3em", fontWeight: 700, color: "var(--text-primary)", marginBottom: 8 }}>
              Weekly Email to Manager
            </div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {weeks.map((w, i) => (
                <div
                  key={i}
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 10,
                    background: i < 4 ? "rgba(59,130,246,0.15)" : "rgba(16,185,129,0.12)",
                    border: `1px solid ${i < 4 ? "rgba(59,130,246,0.3)" : "rgba(16,185,129,0.3)"}`,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 2,
                  }}
                >
                  <FontAwesomeIcon
                    icon={faCheck}
                    style={{
                      fontSize: "0.85em",
                      color: i < 4 ? "var(--accent-blue)" : "#10B981",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.65em",
                      color: "var(--text-secondary)",
                      fontWeight: 600,
                    }}
                  >
                    {w}
                  </span>
                </div>
              ))}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "var(--text-secondary)",
                  fontSize: "1.2em",
                  padding: "0 8px",
                }}
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Arrow + Evaluation card */}
      <div
        className="fragment fade-up"
        data-fragment-index="1"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "16px 0",
          gap: 20,
        }}
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          style={{
            fontSize: "1.4em",
            color: "var(--accent-blue)",
            transform: "rotate(90deg)",
          }}
        />
        <span style={{ fontSize: "1em", color: "var(--text-secondary)", fontStyle: "italic" }}>
          52 weeks later...
        </span>
      </div>

      <div
        className="fragment fade-up"
        data-fragment-index="2"
        style={{
          display: "flex",
          gap: 24,
          alignItems: "stretch",
        }}
      >
        {/* Evaluation summary card */}
        <div
          style={{
            flex: 1,
            background: "var(--bg-card)",
            borderRadius: 16,
            padding: "24px 28px",
            border: "1px solid rgba(245,158,11,0.25)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <FontAwesomeIcon icon={faChartLine} style={{ fontSize: "1.6em", color: "var(--accent-gold)" }} />
            <span style={{ fontSize: "1.2em", fontWeight: 700, color: "var(--accent-gold)" }}>
              Yearly Evaluation
            </span>
          </div>
          <div style={{ fontSize: "0.95em", color: "var(--text-secondary)", lineHeight: 1.8 }}>
            <div>PRs merged: <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>47</span></div>
            <div>Docs authored: <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>12</span></div>
            <div>Initiatives led: <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>3</span></div>
            <div>Cross-team impact: <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>Auth refactor, Rate limiting</span></div>
          </div>
        </div>

        {/* Tips card */}
        <div
          style={{
            flex: 1,
            background: "var(--bg-card)",
            borderRadius: 16,
            padding: "24px 28px",
            border: "1px solid rgba(59,130,246,0.15)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: "1.4em", color: "var(--accent-blue)" }} />
            <span style={{ fontSize: "1.2em", fontWeight: 700, color: "var(--accent-blue)" }}>
              The Habit
            </span>
          </div>
          <ul className="slide-bullets" style={{ margin: 0 }}>
            <li style={{ fontSize: "0.95em", padding: "0.3em 0", paddingLeft: "1.2em" }}>
              Weekly email — what I did, what's next
            </li>
            <li style={{ fontSize: "0.95em", padding: "0.3em 0", paddingLeft: "1.2em" }}>
              Standups aren't status updates — they're your stage
            </li>
            <li style={{ fontSize: "0.95em", padding: "0.3em 0", paddingLeft: "1.2em" }}>
              Documentation makes this 2x easier
            </li>
          </ul>
        </div>
      </div>

      <p
        className="callout fragment fade-up"
        data-fragment-index="3"
        style={{ textAlign: "center" }}
      >
        They may never read it. That's fine — when review time comes, it exists.
      </p>
    </section>
  );
}
