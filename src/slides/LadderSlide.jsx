export default function LadderSlide({ steps }) {
  const getTier = (i) => {
    if (i <= 1) return "base";
    if (i <= 3) return "accent";
    return "gold";
  };

  const tierStyles = {
    base: {
      bg: "rgba(26, 26, 46, 0.6)",
      border: "#94A3B8",
      text: "#94A3B8",
      num: "#94A3B8",
    },
    accent: {
      bg: "rgba(59, 130, 246, 0.08)",
      border: "#3B82F6",
      text: "#F8FAFC",
      num: "#3B82F6",
    },
    gold: {
      bg: "rgba(245, 158, 11, 0.08)",
      border: "#F59E0B",
      text: "#F8FAFC",
      num: "#F59E0B",
    },
  };

  return (
    <section>
      <h2 className="slide-headline" style={{ fontSize: "2.4em", textAlign: "center" }}>
        The leverage ladder
      </h2>

      <div className="ladder-container">
        {[...steps].reverse().map((step, i) => {
          const actualLevel = steps.length - i;
          const tier = getTier(actualLevel - 1);
          const styles = tierStyles[tier];

          return (
            <div
              className="ladder-step fragment fade-up"
              key={i}
              style={{
                background: styles.bg,
                borderLeftColor: styles.border,
              }}
            >
              <span className="ladder-level" style={{ color: styles.num }}>
                {actualLevel}
              </span>
              <span className="ladder-text" style={{ color: styles.text }}>
                {step}
              </span>
              {actualLevel === 7 && (
                <span
                  className="ladder-label"
                  style={{
                    color: "#F59E0B",
                    background: "rgba(245, 158, 11, 0.12)",
                  }}
                >
                  This is where leaders operate
                </span>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
