import { useEffect, useRef, useState } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip);

const COLORS = [
  "#3B82F6",
  "#06B6D4",
  "#8B5CF6",
  "#F59E0B",
  "#10B981",
  "#EF4444",
  "#EC4899",
];

export default function PieChartSlide({ chart }) {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const data = {
    labels: chart.labels,
    datasets: [
      {
        data: chart.data,
        backgroundColor: COLORS.slice(0, chart.data.length),
        borderColor: "#0D0D0D",
        borderWidth: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      animateRotate: animate,
      duration: animate ? 1200 : 0,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: false,
    },
  };

  return (
    <section ref={sectionRef}>
      <div className="pie-slide-layout">
        <div>
          <h2 className="slide-headline" style={{ fontSize: "2.4em" }}>
            {chart.title}
          </h2>
          {/* Custom legend */}
          <div className="pie-legend">
            {chart.labels.map((label, i) => (
              <div className="pie-legend-item" key={i}>
                <span
                  className="pie-legend-dot"
                  style={{ background: COLORS[i] }}
                />
                <span className="pie-legend-pct">{chart.data[i]}%</span>
                <span className="pie-legend-label">{label}</span>
              </div>
            ))}
          </div>
          {chart.callout && (
            <p className="callout fragment fade-up">{chart.callout}</p>
          )}
        </div>
        <div className="pie-chart-container-large">
          {animate && <Pie data={data} options={options} />}
        </div>
      </div>
    </section>
  );
}
