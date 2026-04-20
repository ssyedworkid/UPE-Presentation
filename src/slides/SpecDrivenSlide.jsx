import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCode,
  faFolderOpen,
  faComments,
  faUsers,
  faArrowRight,
  faShieldAlt,
  faCogs,
  faCode,
  faCheckDouble,
  faBolt,
} from "@fortawesome/free-solid-svg-icons";

const specFiles = [
  { name: "architecture.md", icon: faCogs, color: "#3B82F6" },
  { name: "developer.md", icon: faCode, color: "#06B6D4" },
  { name: "tester.md", icon: faCheckDouble, color: "#10B981" },
  { name: "security.md", icon: faShieldAlt, color: "#F59E0B" },
  { name: "challenge.md", icon: faBolt, color: "#EF4444" },
];

const agents = [
  { name: "Architect", icon: faCogs, color: "#3B82F6" },
  { name: "Developer", icon: faCode, color: "#06B6D4" },
  { name: "Tester", icon: faCheckDouble, color: "#10B981" },
  { name: "Security", icon: faShieldAlt, color: "#F59E0B" },
  { name: "Challenger", icon: faBolt, color: "#EF4444" },
];

export default function SpecDrivenSlide() {
  return (
    <section>
      <p
        className="slide-subtitle"
        style={{
          fontSize: "1em",
          fontWeight: 600,
          color: "var(--accent-gold)",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          marginBottom: "0.3em",
        }}
      >
        Level 2
      </p>
      <h2 className="slide-headline" style={{ fontSize: "2.2em" }}>
        Spec-Driven Development
      </h2>
      <p className="slide-subtitle" style={{ marginBottom: "0.8em", fontSize: "1.1em" }}>
        The best engineers don't start with code. They start with clarity.
      </p>

      <div style={{ display: "flex", gap: 24, alignItems: "stretch" }}>
        {/* Step 1: Conversation with Claude */}
        <div
          className="fragment fade-up"
          data-fragment-index="0"
          style={{
            flex: 1,
            background: "var(--bg-card)",
            borderRadius: 16,
            padding: "20px 24px",
            border: "1px solid rgba(59,130,246,0.15)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <FontAwesomeIcon icon={faComments} style={{ fontSize: "1.5em", color: "var(--accent-cyan)" }} />
            <span style={{ fontSize: "1.15em", fontWeight: 700, color: "var(--text-primary)" }}>
              1. Talk to Claude First
            </span>
          </div>
          <div
            style={{
              background: "#111827",
              borderRadius: 10,
              padding: "12px 16px",
              fontFamily: "'Courier New', monospace",
              fontSize: "0.75em",
              lineHeight: 1.8,
            }}
          >
            <div style={{ color: "var(--accent-cyan)" }}>
              $ claude "I need rate limiting on /api/v2"
            </div>
            <div style={{ color: "#94A3B8", paddingLeft: 16 }}>
              Let me ask some questions first...
            </div>
            <div style={{ color: "#94A3B8", paddingLeft: 16 }}>
              What's your expected RPS?
            </div>
            <div style={{ color: "#94A3B8", paddingLeft: 16 }}>
              Per-user or per-API-key?
            </div>
            <div style={{ color: "var(--accent-cyan)", paddingLeft: 16 }}>
              Generating specs...
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div
          className="fragment"
          data-fragment-index="1"
          style={{ display: "flex", alignItems: "center" }}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: "1.5em", color: "var(--accent-blue)" }}
          />
        </div>

        {/* Step 2: File structure */}
        <div
          className="fragment fade-up"
          data-fragment-index="1"
          style={{
            flex: 1,
            background: "var(--bg-card)",
            borderRadius: 16,
            padding: "20px 24px",
            border: "1px solid rgba(59,130,246,0.15)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <FontAwesomeIcon icon={faFolderOpen} style={{ fontSize: "1.5em", color: "var(--accent-blue)" }} />
            <span style={{ fontSize: "1.15em", fontWeight: 700, color: "var(--text-primary)" }}>
              2. Specs Generated
            </span>
          </div>
          <div
            style={{
              background: "#111827",
              borderRadius: 10,
              padding: "14px 18px",
              fontFamily: "'Courier New', monospace",
              fontSize: "0.8em",
              lineHeight: 2,
            }}
          >
            <div style={{ color: "var(--accent-blue)" }}>
              <FontAwesomeIcon icon={faFolderOpen} style={{ marginRight: 8 }} />
              .specify/rate-limiting/
            </div>
            {specFiles.map((file, i) => (
              <div
                key={i}
                className="fragment fade-up"
                data-fragment-index={2 + i}
                style={{ paddingLeft: 28, color: file.color }}
              >
                <FontAwesomeIcon icon={file.icon} style={{ marginRight: 8, width: 14 }} />
                {file.name}
              </div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <div
          className="fragment"
          data-fragment-index="7"
          style={{ display: "flex", alignItems: "center" }}
        >
          <FontAwesomeIcon
            icon={faArrowRight}
            style={{ fontSize: "1.5em", color: "var(--accent-blue)" }}
          />
        </div>

        {/* Step 3: Parallel agents */}
        <div
          className="fragment fade-up"
          data-fragment-index="7"
          style={{
            flex: 1,
            background: "var(--bg-card)",
            borderRadius: 16,
            padding: "20px 24px",
            border: "1px solid rgba(59,130,246,0.15)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
            <FontAwesomeIcon icon={faUsers} style={{ fontSize: "1.5em", color: "#10B981" }} />
            <span style={{ fontSize: "1.15em", fontWeight: 700, color: "var(--text-primary)" }}>
              3. Agents Deploy
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {agents.map((agent, i) => (
              <div
                key={i}
                className="fragment fade-up"
                data-fragment-index={8 + i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 14px",
                  background: "rgba(17,24,39,0.8)",
                  borderRadius: 8,
                  borderLeft: `3px solid ${agent.color}`,
                }}
              >
                <FontAwesomeIcon icon={agent.icon} style={{ color: agent.color, width: 16 }} />
                <span style={{ fontSize: "0.85em", fontWeight: 600, color: "var(--text-primary)" }}>
                  {agent.name}
                </span>
                <span
                  style={{
                    marginLeft: "auto",
                    fontSize: "0.65em",
                    color: agent.color,
                    fontFamily: "'Courier New', monospace",
                    fontWeight: 600,
                  }}
                >
                  RUNNING
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p
        className="callout fragment fade-up"
        data-fragment-index="13"
        style={{ textAlign: "center" }}
      >
        You spec it. Claude builds it — with a whole team.
      </p>
    </section>
  );
}
