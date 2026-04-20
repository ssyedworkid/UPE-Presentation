import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faCrosshairs,
  faBookOpen,
  faLaptopCode,
  faUsers,
  faAward,
  faBullseye,
  faBug,
  faRoute,
} from "@fortawesome/free-solid-svg-icons";

export default function TwoCardSlide() {
  return (
    <section>
      <p className="slide-subtitle" style={{ fontSize: "1em", fontWeight: 600, color: "var(--accent-cyan)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.3em" }}>
        How do you document your work?
      </p>
      <h2 className="slide-headline" style={{ fontSize: "2.2em" }}>
        Two habits that make you unforgettable.
      </h2>

      <div className="two-card-layout">
        {/* Document Everything */}
        <div className="card fragment fade-up" data-fragment-index="0" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="card-title" style={{ fontSize: "1.4em" }}>
            <FontAwesomeIcon icon={faFileAlt} style={{ marginRight: 10, color: "var(--accent-blue)" }} />
            Document Everything
          </div>

          {/* Siddh's Confluence examples */}
          <div style={{ display: "flex", gap: 14 }}>
            <div style={{
              flex: 1, background: "rgba(6,182,212,0.06)", borderRadius: 12,
              padding: "16px 18px", border: "1px solid rgba(6,182,212,0.15)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <FontAwesomeIcon icon={faLaptopCode} style={{ color: "var(--accent-cyan)", fontSize: "1.2em" }} />
                <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95em" }}>Onboarding Guide</span>
              </div>
              <p style={{ fontSize: "0.8em", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                Siddh documented every step of his setup — what worked, what broke, every workaround. That guide became the standard for <span style={{ color: "var(--accent-cyan)", fontWeight: 600 }}>10+ new hires</span>.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                <FontAwesomeIcon icon={faUsers} style={{ color: "#10B981", fontSize: "0.85em" }} />
                <span style={{ fontSize: "0.75em", color: "#10B981", fontWeight: 600 }}>Mentored new devs with his own docs</span>
              </div>
            </div>

            <div style={{
              flex: 1, background: "rgba(59,130,246,0.06)", borderRadius: 12,
              padding: "16px 18px", border: "1px solid rgba(59,130,246,0.15)",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                <FontAwesomeIcon icon={faBookOpen} style={{ color: "var(--accent-blue)", fontSize: "1.2em" }} />
                <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "0.95em" }}>Feature Docs</span>
              </div>
              <p style={{ fontSize: "0.8em", color: "var(--text-secondary)", lineHeight: 1.5, margin: 0 }}>
                Detailed Confluence pages for every feature he builds — architecture, edge cases, runbooks. His team can follow without asking.
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 10 }}>
                <FontAwesomeIcon icon={faAward} style={{ color: "var(--accent-gold)", fontSize: "0.85em" }} />
                <span style={{ fontSize: "0.75em", color: "var(--accent-gold)", fontWeight: 600 }}>That's initiative — and it gets noticed</span>
              </div>
            </div>
          </div>

          <p style={{ fontSize: "0.85em", color: "var(--text-secondary)", fontStyle: "italic", margin: 0 }}>
            What you document today, you hand off tomorrow.
          </p>
        </div>

        {/* Own What You Do */}
        <div className="card fragment fade-up" data-fragment-index="1" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="card-title" style={{ fontSize: "1.4em" }}>
            <FontAwesomeIcon icon={faCrosshairs} style={{ marginRight: 10, color: "var(--accent-blue)" }} />
            Own What You Do
          </div>

          {/* Visual ownership journey */}
          <div style={{
            background: "rgba(59,130,246,0.06)", borderRadius: 12,
            padding: "18px 20px", border: "1px solid rgba(59,130,246,0.15)",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 14 }}>
              <FontAwesomeIcon icon={faBullseye} style={{ color: "var(--accent-blue)", fontSize: "1.4em" }} />
              <span style={{ fontWeight: 700, color: "var(--text-primary)", fontSize: "1em" }}>Go deep on one thing</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: faRoute, color: "#3B82F6", text: "Learn every edge case, every dependency" },
                { icon: faBug, color: "#06B6D4", text: "Be the first to spot issues — and the first to fix them" },
                { icon: faUsers, color: "#10B981", text: "Your team starts routing people to you" },
                { icon: faAward, color: "#F59E0B", text: "That's how you become essential" },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, paddingLeft: 8 }}>
                  <FontAwesomeIcon icon={item.icon} style={{ color: item.color, width: 18, fontSize: "0.9em" }} />
                  <span style={{ fontSize: "0.85em", color: "var(--text-secondary)", lineHeight: 1.4 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
