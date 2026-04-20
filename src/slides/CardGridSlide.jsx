import { useEffect, useRef, useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faDatabase,
  faCheckCircle,
  faRocket,
  faListCheck,
  faFileLines,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const iconMap = {
  faClipboardList,
  faDatabase,
  faCheckCircle,
  faRocket,
  faListCheck,
  faFileLines,
  faEnvelope,
};

const demos = {
  "/jira": [
    { type: "cmd", text: "claude /jira PROJ-142" },
    { type: "out", text: "Fetching issue PROJ-142..." },
    { type: "out", text: "Summary: Add rate limiting to /api/v2/transactions" },
    { type: "out", text: "Priority: High  |  Sprint: Sprint 14" },
    { type: "out", text: "AC: Max 100 req/min per API key, 429 with retry-after" },
  ],
  "/database": [
    { type: "cmd", text: 'claude /database "show recent failed txns"' },
    { type: "out", text: "Connecting to prod-replica..." },
    { type: "out", text: "SELECT * FROM transactions WHERE status='FAILED'" },
    { type: "out", text: "| id   | amount  | error   | created_at       |" },
    { type: "out", text: "| 4821 | $12,450 | TIMEOUT | 2026-04-19 14:32 |" },
  ],
  "/run-tests": [
    { type: "cmd", text: "claude /run-tests --suite integration" },
    { type: "out", text: "Running 47 integration tests..." },
    { type: "out", text: "PASS  auth.test.ts (12 tests, 1.2s)" },
    { type: "out", text: "PASS  transactions.test.ts (23 tests, 3.4s)" },
    { type: "out", text: "47/47 passed.  Coverage: 94.2%" },
  ],
  "/deploy-beta": [
    { type: "cmd", text: "claude /deploy-beta v2.14.0" },
    { type: "out", text: "Building image... done (42s)" },
    { type: "out", text: "Pushing to registry... done" },
    { type: "out", text: "Rolling update to beta-cluster... 3/3 pods ready" },
    { type: "out", text: "Health check passed.  Live at beta.internal.co" },
  ],
  "/standup": [
    { type: "cmd", text: "claude /standup" },
    { type: "out", text: "Scanning yesterday's activity..." },
    { type: "out", text: "Yesterday: Merged PR #312 (rate limiting)" },
    { type: "out", text: "Today: Deploy to beta, start auth refactor" },
    { type: "out", text: "Blockers: Waiting on DB migration approval" },
  ],
  "/docs": [
    { type: "cmd", text: "claude /docs src/api/rateLimit.ts" },
    { type: "out", text: "Analyzing module..." },
    { type: "out", text: "Generated: docs/api/rate-limiting.md" },
    { type: "out", text: "Sections: Overview, Config, API Ref, Examples" },
    { type: "out", text: "Added to sidebar navigation." },
  ],
  "/weekly-email": [
    { type: "cmd", text: "claude /weekly-email" },
    { type: "out", text: "Compiling week of Apr 14-18..." },
    { type: "out", text: "Shipped: Rate limiting (#312), Auth fix (#309)" },
    { type: "out", text: "In progress: Auth refactor (60%)" },
    { type: "out", text: "Draft ready.  Send to manager? (y/n)" },
  ],
};

export default function CardGridSlide({ skills }) {
  const sectionRef = useRef(null);
  const triggersRef = useRef(null);
  const lastActiveRef = useRef(0);
  const [activeSkill, setActiveSkill] = useState(0);

  // Poll hidden trigger fragments for "visible" class every 150ms.
  // React never touches the trigger elements' className, so Reveal.js
  // owns their class attribute entirely — no conflicts.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!triggersRef.current) return;
      const triggers = triggersRef.current.querySelectorAll(".skill-trigger");
      let highest = 0;
      triggers.forEach((el, i) => {
        if (el.classList.contains("visible")) highest = i;
      });
      if (highest !== lastActiveRef.current) {
        lastActiveRef.current = highest;
        setActiveSkill(highest);
      }
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Apply active highlight via DOM so React never re-renders the skill rows
  const skillRowsRef = useRef([]);
  const setSkillRowRef = useCallback((el, i) => {
    skillRowsRef.current[i] = el;
  }, []);

  useEffect(() => {
    if (!triggersRef.current) return;
    const triggers = triggersRef.current.querySelectorAll(".skill-trigger");
    skillRowsRef.current.forEach((row, i) => {
      if (!row) return;
      const isVisible = triggers[i]?.classList.contains("visible");
      // Fade in the row when its trigger is visible
      row.style.opacity = isVisible ? "1" : "0";
      row.style.transform = isVisible ? "translateY(0)" : "translateY(20px)";
      // Highlight the active one
      row.classList.toggle("skill-row-active", i === activeSkill);
    });
  }, [activeSkill]);

  const currentDemo = demos[skills[activeSkill]?.name] || demos["/jira"];

  return (
    <section ref={sectionRef}>
      <p style={{ fontSize: "1em", fontWeight: 600, color: "var(--accent-gold)", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.3em" }}>
        Level 3
      </p>
      <h2 className="slide-headline" style={{ fontSize: "2em" }}>
        Claude Skills & MCP: Your engineering toolkit
      </h2>

      {/* Hidden trigger fragments — Reveal.js owns these, React never re-renders them */}
      <div ref={triggersRef} style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}>
        {skills.map((_, i) => (
          <span key={i} className="skill-trigger fragment" data-fragment-index={i} />
        ))}
      </div>

      <div className="skills-with-demo">
        {/* Left: skill list — NO fragment class, all visible immediately */}
        <div className="skill-list">
          {skills.map((skill, i) => (
            <div
              className="skill-row"
              key={i}
              ref={(el) => setSkillRowRef(el, i)}
              style={{ opacity: 0, transform: "translateY(20px)", transition: "all 0.4s ease" }}
            >
              <span className="skill-row-icon">
                <FontAwesomeIcon
                  icon={iconMap[skill.faIcon]}
                  style={{ color: "var(--accent-cyan)" }}
                />
              </span>
              <span className="skill-name">{skill.name}</span>
              <span className="skill-desc">{skill.desc}</span>
            </div>
          ))}
        </div>

        {/* Right: terminal demo */}
        <div className="demo-terminal">
          <div className="video-demo-header">
            <span className="video-demo-dot red" />
            <span className="video-demo-dot yellow" />
            <span className="video-demo-dot green" />
            <span className="video-demo-title">Claude Code — {skills[activeSkill]?.name}</span>
          </div>
          <div className="video-demo-body-static">
            {currentDemo.map((line, j) => (
              <div
                className={`video-demo-line ${line.type === "out" ? "vd-output" : ""}`}
                key={`${activeSkill}-${j}`}
              >
                {line.type === "cmd" && <span className="vd-prompt">$</span>}
                {line.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="callout fragment fade-up" data-fragment-index="7" style={{ textAlign: "center" }}>
        Each one saves you time. But that's not the real move.
      </p>
    </section>
  );
}
