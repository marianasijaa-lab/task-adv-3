import Img1 from '../assets/Group.png'
import Img2 from '../assets/Group 1.png'
import Img3 from '../assets/Group 2.png'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import SectionHeader from "./SectionHeader";
import { useResponsiveSlider } from "../hooks/useResponsiveSlider";

const testimonials = [
  {
    name: "Jennifer B",
    avatar: Img1,
    text: "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    name: "David K",
    avatar: Img2,
    text: "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    name: "Emily L",
    avatar: Img3,
    text: "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
  {
    name: "Sarah M",
    avatar: Img1,
    text: "The teachers here truly care about each child's development. We couldn't be happier with our choice.",
  },
  {
    name: "James T",
    avatar: Img2,
    text: "An incredible school with a warm community. Our daughter loves every single day she spends here.",
  },
];

const Testimonials=()=> {
  const { currentIndex: start, visibleCount: visible, canPrev, canNext, prev, next } =
    useResponsiveSlider(testimonials.length);

  const shown = testimonials.slice(start, start + visible);

  return (
    <section className="testimonials container">
      <SectionHeader
        tag="Their Happy Words 🤗"
        title="Our Testimonials"
        description="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
      />

      <div className="testimonials-slider">
        <button className="arrow-btn" onClick={prev} disabled={!canPrev} aria-label="Previous"><IoIosArrowRoundBack className="arrow" /></button>

        <div className="testimonials-cards">
          {shown.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="avatar">
                <img src={t.avatar} alt={t.name} />
              </div>
              <h3>{t.name}</h3>
              <div className="stars">★★★★★</div>
              <p>{t.text}</p>
            </div>
          ))}
        </div>

        <button className="arrow-btn" onClick={next} disabled={!canNext} aria-label="Next"><IoIosArrowRoundForward className="arrow"/></button>
      </div>
    </section>
  );
}
export default Testimonials;
