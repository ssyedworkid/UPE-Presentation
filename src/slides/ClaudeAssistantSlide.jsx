import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRobot,
  faArrowRight,
  faChartLine,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const base = import.meta.env.BASE_URL;

export default function ClaudeAssistantSlide() {
  return (
    <section>
      <h2 className="slide-headline" style={{ fontSize: "2.2em" }}>
        Make Claude your assistant, not just your coder.
      </h2>

      <div style={{ display: "flex", gap: 24, marginTop: "0.8em", alignItems: "stretch" }}>
        {/* GitHub Activity Comparison */}
        <div
          className="fragment fade-up"
          data-fragment-index="0"
          style={{ flex: 2, display: "flex", flexDirection: "column", gap: 16 }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <FontAwesomeIcon icon={faChartLine} style={{ color: "var(--accent-blue)", fontSize: "1.3em" }} />
            <span style={{ fontSize: "1.2em", fontWeight: 700, color: "var(--text-primary)" }}>
              GitHub Activity — Real Numbers
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Before */}
            <div style={{
              flex: 1, background: "var(--bg-card)", borderRadius: 14,
              padding: "16px 18px", border: "1px solid rgba(59,130,246,0.15)",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "0.8em", color: "var(--text-secondary)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                First 6 Months
              </div>
              <img
                src={`${base}assets/infographics/contrib-before.png`}
                alt="GitHub contributions before"
                style={{ width: "100%", borderRadius: 8, marginBottom: 10 }}
              />
              <div style={{ fontSize: "2em", fontWeight: 900, color: "var(--text-primary)" }}>
                300
              </div>
              <div style={{ fontSize: "0.8em", color: "var(--text-secondary)" }}>contributions</div>
            </div>

            {/* Arrow */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "1.8em", color: "var(--accent-cyan)" }} />
              <span style={{ fontSize: "0.7em", color: "var(--accent-cyan)", fontWeight: 600 }}>
                + Claude
              </span>
            </div>

            {/* After */}
            <div style={{
              flex: 1, background: "var(--bg-card)", borderRadius: 14,
              padding: "16px 18px", border: "1px solid rgba(6,182,212,0.25)",
              textAlign: "center",
            }}>
              <div style={{ fontSize: "0.8em", color: "var(--text-secondary)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                Last 2 Months
              </div>
              <img
                src={`${base}assets/infographics/contrib-after.png`}
                alt="GitHub contributions after"
                style={{ width: "100%", borderRadius: 8, marginBottom: 10 }}
              />
              <div style={{ fontSize: "2em", fontWeight: 900, color: "var(--accent-cyan)" }}>
                680
              </div>
              <div style={{ fontSize: "0.8em", color: "var(--text-secondary)" }}>contributions</div>
            </div>
          </div>
        </div>

        {/* Cost card */}
        <div
          className="fragment fade-up"
          data-fragment-index="1"
          style={{
            flex: 1, display: "flex", flexDirection: "column", gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <FontAwesomeIcon icon={faDollarSign} style={{ color: "var(--accent-gold)", fontSize: "1.3em" }} />
            <span style={{ fontSize: "1.2em", fontWeight: 700, color: "var(--text-primary)" }}>
              The Cost
            </span>
          </div>

          <div style={{
            background: "var(--bg-card)", borderRadius: 14,
            padding: "18px 20px", border: "1px solid rgba(245,158,11,0.2)",
            flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
          }}>
            <img
              src={`${base}assets/infographics/cost.png`}
              alt="Claude usage cost"
              style={{ width: "100%", borderRadius: 8, marginBottom: 14 }}
            />
            <p style={{ fontSize: "0.9em", color: "var(--text-secondary)", lineHeight: 1.6, margin: 0 }}>
              Output <span style={{ color: "var(--accent-cyan)", fontWeight: 700 }}>doubled</span>.
              Cost doubled too. As long as you're making
              <span style={{ color: "var(--accent-gold)", fontWeight: 700 }}> real impact</span>,
              every dollar is justifiable.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bullets */}
      <div className="fragment fade-up" data-fragment-index="2" style={{ marginTop: "1em" }}>
        <div style={{ display: "flex", gap: 20 }}>
          {[
            { icon: faRobot, text: "Track standups & surface what matters" },
            { icon: faRobot, text: "Auto-generate documentation from your notes" },
            { icon: faRobot, text: "Draft your weekly manager email from your activity log" },
          ].map((item, i) => (
            <div key={i} style={{
              flex: 1, display: "flex", alignItems: "center", gap: 12,
              padding: "12px 18px", background: "var(--bg-card)", borderRadius: 10,
              border: "1px solid rgba(59,130,246,0.1)",
            }}>
              <FontAwesomeIcon icon={item.icon} style={{ color: "var(--accent-cyan)", fontSize: "1.1em", flexShrink: 0 }} />
              <span style={{ fontSize: "0.85em", color: "var(--text-secondary)" }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
