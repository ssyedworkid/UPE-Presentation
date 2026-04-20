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

function SmallPie({ chart, animate }) {
  const data = {
    labels: chart.labels,
    datasets: [
      {
        data: chart.data,
        backgroundColor: COLORS.slice(0, chart.data.length),
        borderColor: "#0D0D0D",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    animation: {
      animateRotate: animate,
      duration: animate ? 1000 : 0,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
      datalabels: false,
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
      {/* Inline legend below each pie */}
      <div className="mini-pie-legend">
        {chart.labels.map((label, i) => (
          <div className="mini-pie-legend-item" key={i}>
            <span className="pie-legend-dot" style={{ background: COLORS[i] }} />
            <span className="mini-legend-pct">{chart.data[i]}%</span>
            <span className="mini-legend-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProgressivePieSlide({ charts }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef}>
      <h2 className="slide-headline" style={{ fontSize: "2.2em", textAlign: "center" }}>
        Day in the Life
      </h2>

      <div className="progressive-pie-row">
        {/* First chart - always visible */}
        <div className="progressive-pie-item">
          <h3 className="progressive-pie-label">{charts[0].title}</h3>
          <div className="progressive-pie-chart">
            {visible && <SmallPie chart={charts[0]} animate />}
          </div>
        </div>

        {/* Arrow + Second chart */}
        <div className="progressive-pie-arrow fragment" data-fragment-index="0">
          <svg width="50" height="50" viewBox="0 0 50 50">
            <path d="M5 25 L38 25 M30 17 L38 25 L30 33"
              stroke="#3B82F6" strokeWidth="3" fill="none"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="progressive-pie-item fragment" data-fragment-index="0">
          <h3 className="progressive-pie-label">{charts[1].title}</h3>
          <div className="progressive-pie-chart">
            {visible && <SmallPie chart={charts[1]} animate />}
          </div>
        </div>

        {/* Arrow + Third chart */}
        <div className="progressive-pie-arrow fragment" data-fragment-index="1">
          <svg width="50" height="50" viewBox="0 0 50 50">
            <path d="M5 25 L38 25 M30 17 L38 25 L30 33"
              stroke="#3B82F6" strokeWidth="3" fill="none"
              strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="progressive-pie-item fragment" data-fragment-index="1">
          <h3 className="progressive-pie-label">{charts[2].title}</h3>
          <div className="progressive-pie-chart">
            {visible && <SmallPie chart={charts[2]} animate />}
          </div>
        </div>
      </div>

      <p className="callout fragment" data-fragment-index="2" style={{ textAlign: "center" }}>
        {charts[1].callout}
      </p>
    </section>
  );
}
