export default function TitleSlide({ title, subtitle }) {
  return (
    <section className="transition-slide">
      <h1 className="slide-headline" style={{ fontSize: "3.5em" }}>
        {title}
      </h1>
      <p className="slide-subtitle" style={{ fontSize: "1.6em" }}>
        {subtitle}
      </p>
    </section>
  );
}
