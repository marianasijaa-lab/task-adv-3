import checkerImg from "../assets/Abstract Design (1).png";

interface PageHeroCardProps {
  tag: string;
  title: string;
  description: string;
}

export default function PageHeroCard({ tag, title, description }: PageHeroCardProps) {
  return (
    <section className="about-hero-section">
      <div className="container">
        <div className="about-hero-card">
          <div className="about-hero-dots">
            <img src={checkerImg} alt="" className="checker-pattern" aria-hidden="true" />
          </div>
          <div className="about-hero-body">
            <div className="about-hero-left">
              <span className="section-tag">{tag}</span>
              <h1 className="about-hero-title">{title}</h1>
            </div>
            <div className="about-hero-right">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

