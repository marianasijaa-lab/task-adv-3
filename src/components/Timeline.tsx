import checkerImg from "../assets/abstract design (orange).png";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="tl-wrapper">
      {items.map((item, i) => (
        <div key={i} className={`tl-row${i === items.length - 1 ? " tl-last" : ""}`}>
          <div className="tl-track">
            {i < items.length - 1 && <div className="tl-vline" />}
            <div className="tl-dot-left" />
            <div className="tl-hbar" />
            <div className="tl-dot-right" />
          </div>

          <div className="tl-badge">
            <img src={checkerImg} alt="" className="tl-checker" aria-hidden="true" />
            <span className="tl-year">{item.year}</span>
          </div>

          <div className="tl-content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
