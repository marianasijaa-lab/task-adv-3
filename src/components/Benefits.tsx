import { FaCrown, FaUserFriends } from "react-icons/fa";
import {FaFlag, FaGraduationCap, FaLifeRing, FaMaskFace } from "react-icons/fa6";
import SectionHeader from "./SectionHeader";
import IconCard from "./IconCard";

const benefits = [
  {
    icon: <FaGraduationCap />,
    title: "Holistic Learning Approach",
    desc: "Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.",
  },
  {
    icon: <FaCrown />,
    title: "Experienced Educators",
    desc: "Our passionate and qualified teachers create a supportive and stimulating learning environment.",
  },
  {
    icon: <FaMaskFace />,
    title: "Nurturing Environment",
    desc: "We prioritize safety and provide a warm and caring atmosphere for every child.",
  },
  {
    icon: <FaFlag />,
    title: "Play-Based Learning",
    desc: "We believe in the power of play to foster creativity, problem-solving skills, and imagination.",
  },
  {
    icon: <FaLifeRing />,
    title: "Individualized Attention",
    desc: "Our small class sizes enable personalized attention, catering to each child's unique needs.",
  },
  {
    icon: <FaUserFriends />,
    title: "Parent Involvement",
    desc: "We foster a strong parent-school partnership to ensure seamless communication and collaboration.",
  },
];

const Benefits=() =>{
  return (
    <section className="benefits container">
      <SectionHeader
        tag="Children Deserve Bright Future"
        title="Our Benefits"
        description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
      />

      <div className="benefits-grid">
        {benefits.map((b, i) => (
          <IconCard
            key={i}
            icon={b.icon}
            title={b.title}
            description={b.desc}
            className="benefit-card"
            iconClassName="benefit-icon"
          />
        ))}
      </div>
    </section>
  );
}
export default Benefits
