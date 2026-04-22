import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import PageHeroCard from "../components/PageHeroCard";
import AwardsSlider from "../components/AwardsSlider";

import Img1 from "../assets/Person1.png";
import Img2 from "../assets/Person2.png";
import Img3 from "../assets/Person3.png";
import Img4 from "../assets/Person4.png";
import Img5 from "../assets/Person5.png";
import Img6 from "../assets/Person6.png";
import Timeline, { type TimelineItem } from "../components/Timeline";
import missionIcon from "../assets/mission-icon.png";
import visionIcon from "../assets/vission.icon .png"
import { BsEnvelopeFill } from "react-icons/bs";


/* ── TEAM DATA ── */
interface TeamMember {
  id: number;
  name: string;
  qualification: string;
  bio: string;
  image: string;
}

const team: TeamMember[] = [
  {
    id: 1,
    name: "Ms. Sarah Anderson",
    qualification: "Bachelor's Degree in Early Childhood Education",
    bio: "Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn.",
    image: Img1,
  },
  {
    id: 2,
    name: "Mr. David Roberts",
    qualification: "Master's Degree in Elementary Education",
    bio: "With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically.",
    image: Img2,
  },
  {
    id: 3,
    name: "Ms. Emily Hernandez",
    qualification: "Diploma in Child Psychology",
    bio: "Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students.",
    image: Img3,
  },
  {
    id: 4,
    name: "Mr. Michael Turner",
    qualification: "Bachelor's Degree in Physical Education",
    bio: "Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle.",
    image: Img4,
  },
  {
    id: 5,
    name: "Ms. Jessica Lee",
    qualification: "Master's Degree in Special Education",
    bio: "Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential.",
    image: Img5,
  },
  {
    id: 6,
    name: "Mr. William Parker",
    qualification: "Bachelor's Degree in Fine Arts",
    bio: "Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students.",
    image: Img6,
  },
];

/* ── HISTORY DATA ── */
const history: TimelineItem[] = [
  {
    year: "2023",
    title: "Resilience and Future Horizons",
    description:
      "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow.",
  },
  {
    year: "2017",
    title: "Innovation and Technology",
    description:
      "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students.",
  },
  {
    year: "2012",
    title: "Expansion and Recognition",
    description:
      "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies.",
  },
  {
    year: "2005",
    title: "Inception and Growth",
    description:
      "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth.",
  },
];

/* ── COMPONENT ── */
export default function About() {
  return (
    <>
      <Navbar />

      {/* ── ABOUT HERO ── */}
      <PageHeroCard
        tag="Overview"
        title={"Welcome to Little Learners\nAcademy"}
        description="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
      />

      {/* ── MISSION & VISION ── */}
      <section className="mv-section">
        <div className="container">
          <div className="mv-header">
            <SectionHeader
              tag="Mission &amp; Visions"
              title="Our Mission &amp; Visions"
              description="We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
            />
          </div>

          <div className="mv-cards-grid">
            <div className="mv-card-new">
              <div className="mv-card-top">
                <h3>Mission</h3>
                <div className="mv-icon-wrap">
                  <img src={missionIcon} alt="Mission" className="mv-icon-img" />
                </div>
              </div>
              <p>
                At Little Learners Academy, our mission is to inspire a passion for learning
                and empower young minds to become confident, compassionate, and
                creative individuals. We strive to create a safe and inclusive space where
                children thrive academically, socially, and emotionally, setting the stage
                for a successful educational journey.
              </p>
            </div>

            <div className="mv-card-new">
              <div className="mv-card-top">
                <h3>Vision</h3>
                <div className="mv-icon-wrap">
                  <img src={visionIcon} alt="Vision" className="mv-icon-img" />
                </div>
              </div>
              <p>
                Our vision is to be a beacon of educational excellence, where children are
                encouraged to explore, discover, and express their unique talents. We aim
                to foster a generation of lifelong learners equipped with critical thinking,
                empathy, and a deep appreciation for diversity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── AWARDS SLIDER ── */}
      <AwardsSlider />

      {/* ── HISTORY ── */}
      <section className="history-section">
        <div className="container">
          <div className="history-header">
            <SectionHeader
              tag="Our Progressive Journey"
              title="Our History"
              description="Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
            />
          </div>

          <div className="history-card">
            <Timeline items={history} />
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <SectionHeader
              tag="Our Teachers With Experties"
              title="Our Team Members"
              description="At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
            />
          </div>

          <div className="team-cards-grid">
            {team.map((member) => (
              <div key={member.id} className="team-card-new">
                {/* Header row */}
                <div className="team-card-header">
                  <div className="team-member-info">
                    <div className="team-avatar">
                      <img src={member.image} alt={member.name} />
                    </div>
                    <span className="team-member-name">{member.name}</span>
                  </div>
                  <button className="team-email-btn" aria-label={`Email ${member.name}`}>
                    <BsEnvelopeFill />
                  </button>
                </div>

                {/* Qualification box */}
                <div className="team-qual-box">
                  <p className="team-qual-title">
                    Qualification:{member.qualification}
                  </p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
