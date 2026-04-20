export default function PyramidSlide({ levels }) {
  const tierColors = {
    base: {
      bg: "rgba(26, 26, 46, 0.8)",
      border: "rgba(148, 163, 184, 0.3)",
      text: "#94A3B8",
      num: "#94A3B8",
    },
    accent: {
      bg: "rgba(59, 130, 246, 0.12)",
      border: "rgba(59, 130, 246, 0.4)",
      text: "#F8FAFC",
      num: "#3B82F6",
    },
    gold: {
      bg: "rgba(245, 158, 11, 0.1)",
      border: "rgba(245, 158, 11, 0.4)",
      text: "#F8FAFC",
      num: "#F59E0B",
    },
  };

  const reversed = [...levels].reverse();

  const widths = [40, 48, 56, 64, 72, 80, 88];

  return (
    <section>
      <h2 className="slide-headline" style={{ fontSize: "2.4em", textAlign: "center" }}>
        There are levels to this.
      </h2>

      <div className="pyramid-container">
        {reversed.map((level, i) => {
          const colors = tierColors[level.tier];
          const actualIndex = reversed.length - 1 - i;
          const showSeparator =
            (level.level === 5) || (level.level === 3);

          return (
            <div key={level.level} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
              {level.level === 7 && (
                <>
                  <hr className="pyramid-separator" style={{ width: `${widths[actualIndex] - 5}%` }} />
                  <span
                    className="accent-gold"
                    style={{ fontSize: "0.8em", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}
                  >
                    Leaders
                  </span>
                </>
              )}
              {level.level === 5 && (
                <>
                  <hr className="pyramid-separator" style={{ width: `${widths[actualIndex]}%` }} />
                  <span
                    className="accent"
                    style={{ fontSize: "0.8em", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}
                  >
                    Amazing Engineers
                  </span>
                </>
              )}
              {level.level === 1 && (
                <>
                  <hr className="pyramid-separator" style={{ width: `${widths[actualIndex]}%` }} />
                  <span
                    style={{ fontSize: "0.8em", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4, color: "#94A3B8" }}
                  >
                    Good Engineers
                  </span>
                </>
              )}
              <div
                className="pyramid-level fragment fade-up"
                style={{
                  width: `${widths[actualIndex]}%`,
                  backgroundColor: colors.bg,
                  border: `1px solid ${colors.border}`,
                }}
              >
                <span className="pyramid-level-number" style={{ color: colors.num }}>
                  {level.level}
                </span>
                {level.label && (
                  <span className="pyramid-level-label" style={{ color: colors.num }}>
                    {level.label} —{" "}
                  </span>
                )}
                <span className="pyramid-level-text" style={{ color: colors.text }}>
                  {level.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
