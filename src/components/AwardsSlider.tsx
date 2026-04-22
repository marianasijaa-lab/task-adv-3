import { FaChartPie, FaTrophy, FaMedal, FaStar, FaHeart, FaShieldAlt, FaCrown, FaLeaf, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import type { ReactNode } from "react";
import { HiBolt, HiChartBar } from "react-icons/hi2";
import { AiFillPieChart } from "react-icons/ai";
import SectionHeader from "./SectionHeader";
import { useResponsiveSlider } from "../hooks/useResponsiveSlider";
import IconCard from "./IconCard";

interface Award {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const awards: Award[] = [
  {
    id: 1,
    title: "Outstanding Early Childhood Education Award",
    description:
      "Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment.",
    icon: <AiFillPieChart />,
  },
  {
    id: 2,
    title: "Innovative STEAM Education Award",
    description:
      "Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners.",
    icon: <HiChartBar />,
  },
  {
    id: 3,
    title: "Environmental Stewardship Award",
    description:
      "Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students.",
    icon:<HiBolt />,
  },
  {
    id: 4,
    title: "Best Kindergarten School",
    description:
      "Recognized by the Education Excellence Awards for maintaining the highest standards in kindergarten education and student development.",
    icon: <FaTrophy />,
  },
  {
    id: 5,
    title: "Outstanding Early Education",
    description:
      "Awarded by the National Education Board for our outstanding contributions to early childhood education and community engagement.",
    icon: <FaMedal />,
  },
  {
    id: 6,
    title: "Innovation in Teaching",
    description:
      "Presented at the EdTech Summit for our innovative teaching methodologies and integration of technology in early education.",
    icon: <FaStar />,
  },
  {
    id: 7,
    title: "Community Impact Award",
    description:
      "Received from the City Council for our positive impact on the local community through educational outreach and family support programs.",
    icon: <FaHeart />,
  },
  {
    id: 8,
    title: "Excellence in Child Care",
    description:
      "Awarded by the Child Welfare Association for maintaining exceptional standards in child care, safety, and well-being.",
    icon: <FaShieldAlt />,
  },
  {
    id: 9,
    title: "Top Rated School",
    description:
      "Recognized by the Parents Choice Foundation as a top-rated school based on parent satisfaction, academic outcomes, and overall school environment.",
    icon: <FaCrown />,
  },
  {
    id: 10,
    title: "Green School Award",
    description:
      "Presented by the Environmental Education Council for our commitment to sustainability, eco-friendly practices, and environmental awareness programs.",
    icon: <FaLeaf />,
  },
  {
    id: 11,
    title: "Best Curriculum Design",
    description:
      "Awarded for our holistic and child-centered curriculum that integrates play-based learning with structured academic development.",
    icon: <FaChartPie />,
  },
];

export default function AwardsSlider() {
  const { currentIndex, visibleCount, canPrev, canNext, prev, next } =
    useResponsiveSlider(awards.length);

  const remaining = awards.length - (currentIndex + visibleCount);
  const shown = awards.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section className="awards-section">
      <div className="container">
        <div className="awards-header">
          <SectionHeader
            tag="Our Achievements"
            title="Our Awards and Recognitions"
            description="Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
          />
        </div>

        {/* Cards */}
        <div className="awards-cards-wrap">
          {shown.map((award) => (
            <IconCard
              key={award.id}
              icon={award.icon}
              title={award.title}
              description={award.description}
              className="award-card-new"
              iconClassName="award-icon-new"
            />
          ))}
        </div>

        {/* Footer row: remaining count + nav buttons */}
        <div className="awards-footer-row">
          {remaining > 0 ? (
            <span className="awards-remaining">{remaining} More Awards</span>
          ) : (
            <span className="awards-remaining" />
          )}
          <div className="awards-nav-btns">
            <button
              className="awards-nav-btn"
              onClick={prev}
              disabled={!canPrev}
              aria-label="Previous awards"
            >
              <FaArrowLeft />
            </button>
            <button
              className="awards-nav-btn"
              onClick={next}
              disabled={!canNext}
              aria-label="Next awards"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
