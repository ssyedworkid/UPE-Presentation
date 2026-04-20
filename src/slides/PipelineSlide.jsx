import { useEffect, useRef, useState } from "react";

export default function PipelineSlide({ steps }) {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          steps.forEach((_, i) => {
            setTimeout(() => setActiveIndex(i), (i + 1) * 400);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [steps]);

  return (
    <section ref={sectionRef}>
      <h2 className="slide-headline" style={{ fontSize: "2.4em", textAlign: "center" }}>
        What if you ran them all together?
      </h2>

      <div className="pipeline-container">
        {steps.map((step, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center" }}>
            <div className={`pipeline-node ${i <= activeIndex ? "active" : ""}`}>
              <div className="pipeline-circle">{step.name}</div>
              <span className="pipeline-desc">{step.desc}</span>
            </div>
            {i < steps.length - 1 && (
              <span
                className="pipeline-arrow"
                style={{
                  opacity: i < activeIndex ? 1 : 0.2,
                  transition: "opacity 0.4s ease",
                }}
              >
                →
              </span>
            )}
          </div>
        ))}
      </div>

      <p className="callout fragment fade-up" style={{ textAlign: "center" }}>
        That's not a workflow. That's an engineering pipeline.
      </p>
    </section>
  );
}
