export default function IcebergSlide() {
  return (
    <section>
      <h2 className="slide-headline" style={{ fontSize: "2.4em", textAlign: "center" }}>
        How people use Claude today
      </h2>

      <div className="iceberg-container">
        <svg viewBox="0 0 600 500" width="650" style={{ margin: "0 auto" }}>
          {/* Water line */}
          <line
            x1="0" y1="140" x2="600" y2="140"
            stroke="#3B82F6" strokeWidth="2" strokeDasharray="8 4" opacity="0.5"
          />
          <text x="580" y="135" fill="#3B82F6" fontSize="12" textAnchor="end" opacity="0.6">
            waterline
          </text>

          {/* Tip - above water */}
          <polygon
            points="300,30 340,140 260,140"
            fill="#3B82F6"
            opacity="0.9"
          />
          <text x="300" y="95" fill="#F8FAFC" fontSize="11" textAnchor="middle" fontWeight="600">
            What most
          </text>
          <text x="300" y="110" fill="#F8FAFC" fontSize="11" textAnchor="middle" fontWeight="600">
            people do
          </text>

          {/* Labels above water */}
          <text x="300" y="165" fill="#94A3B8" fontSize="12" textAnchor="middle">
            "Fix this bug" · "Write this email" · "Explain this code"
          </text>

          {/* Submerged mass */}
          <polygon
            points="260,140 340,140 420,280 440,380 380,450 220,450 160,380 180,280"
            fill="#0F172A"
            stroke="#3B82F6"
            strokeWidth="1"
            opacity="0.85"
            className="fragment fade-up"
          />

          {/* Submerged label */}
          <text
            x="300" y="310"
            fill="#3B82F6" fontSize="16" textAnchor="middle"
            fontWeight="700"
            className="fragment fade-up"
          >
            What's actually possible
          </text>
          <text
            x="300" y="340"
            fill="#94A3B8" fontSize="12" textAnchor="middle"
            className="fragment fade-up"
          >
            (we'll show you)
          </text>

          {/* Glow effect on submerged */}
          <ellipse
            cx="300" cy="300" rx="100" ry="80"
            fill="#3B82F6" opacity="0.04"
            className="fragment fade-up"
          />
        </svg>
      </div>

      <p className="callout fragment fade-up" style={{ textAlign: "center" }}>
        Useful. But scratching the surface.
      </p>
    </section>
  );
}
