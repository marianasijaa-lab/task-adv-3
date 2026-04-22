import Img from "../assets/kids.png";

export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-image-wrap">
        {/* outer frame */}
        <div className="hero-frame">
          <span className="frame-dot fd-tl" />
          <span className="frame-dot fd-tr" />
          <span className="frame-dot fd-bl" />
          <span className="frame-dot fd-br" />
        </div>
        {/* inner image box */}
        <div className="hero-image-bg">
          <img src={Img} alt="Happy kids at Little Learners Academy" />

          {/* dots */}
          {[
            // top arc (small → medium)
            { top: "12%", left: "24%", s: 20 },
            { top: "7%",  left: "36%", s: 24 },
            { top: "6%",  left: "49%", s: 26 },
            { top: "8%",  left: "62%", s: 24 },
            // right side (medium → large going down)
            { top: "16%", left: "76%", s: 23 },
            { top: "28%", left: "82%", s: 26 },
            { top: "42%", left: "84%", s: 32 },
            { top: "56%", left: "82%", s: 36 },
            // bottom right (large)
            { top: "68%", left: "74%", s: 38 },
            { top: "72%", left: "58%", s: 36 },
            { top: "72%", left: "42%", s: 34 },
            // bottom left (large → small)
            { top: "68%", left: "26%", s: 30 },
            { top: "78%", left: "14%", s: 18 },
            { top: "86%", left: "28%", s: 16 },
            { top: "90%", left: "44%", s: 14 },
            { top: "88%", left: "60%", s: 10 },
            { top: "82%", left: "76%", s: 8  },
            // left side (small going up)
            { top: "68%", left: "8%",  s: 14 },
            { top: "56%", left: "6%",  s: 16 },
            { top: "42%", left: "6%",  s: 16 },
            { top: "30%", left: "8%",  s: 16 },
            { top: "19%", left: "14%",  s: 17 },
          ].map((d, i) => (
            <span key={i} className="hero-dot" style={{
              top: d.top,
              left: d.left,
              width: d.s,
              height: d.s,
              animationDelay: `${i * 0.12}s`
            }} />
          ))}
        </div>
      </div>

      <div className="hero-content">
        <span className="hero-badge">Welcome to Little Learners Academy</span>

        <h1>
          Where Young Minds Blossom<br />
          and <span className="orange">Dreams Take Flight.</span>
        </h1>

        <p>
          Our kinder garden school provides a nurturing and stimulating environment, fostering
          a love for learning that lasts a lifetime. Join us as we embark on an exciting
          educational journey together!
        </p>

        <div className="stats-box">
          <div className="stat-item">
            <h3>+7000</h3>
            <p>Students Passed Out</p>
          </div>
          <div className="stat-item">
            <h3>+37</h3>
            <p>Awards &amp; Recognitions</p>
          </div>
          <div className="stat-item">
            <h3>+15</h3>
            <p>Experience Educators</p>
          </div>
        </div>
      </div>
    </section>
  );
}
