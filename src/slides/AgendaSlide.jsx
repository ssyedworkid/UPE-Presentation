export default function AgendaSlide() {
  const items = [
    { num: "1", text: "Day in the Life" },
    { num: "2", text: "Where AI & Claude Fit In" },
  ];

  return (
    <section>
      <h2 className="slide-headline">Here's what we're covering</h2>
      <div className="agenda-items">
        {items.map((item, i) => (
          <div className="agenda-item fragment fade-up" key={i}>
            <span className="agenda-number">{item.num}</span>
            <span className="agenda-text">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
