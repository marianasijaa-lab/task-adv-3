import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import SectionHeader from "./SectionHeader";

interface PageItem {
  title: string;
  desc: string;
  to: string;
}

const pages: PageItem[] = [
  {
    title: "About Us",
    desc: "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
    to: "/about",
  },
  {
    title: "Academics",
    desc: "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
    to: "/academics",
  },
  {
    title: "Student Life",
    desc: "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
    to: "/student-life",
  },
  {
    title: "Admissions",
    desc: "Learn about our Enrollment Process and how to secure your child's place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
    to: "/admissions",
  },
];

const Pages = () => {
  return (
    <section className="pages container">
      <SectionHeader
        tag="Explore More"
        title="Navigate through our Pages"
        description="Your gateway to discovering a wealth of valuable information about our kindergarten school. Feel free to explore and learn more about the enriching experiences that await your child at our kindergarten school"
      />
      <div className="pages-grid">
        {pages.map((p, i) => (
          <div key={i} className="page-card">
            <h3>{p.title}</h3>
            <div className="page-divider">
              <span className="dot" />
              {[...Array(6)].map((_, j) => (
                <span key={j} className="dash-block" />
              ))}
              <span className="dot" />
            </div>
            <p>{p.desc}</p>
            <Link to={p.to} className="learn-btn">
              Learn More <IoMdArrowForward className="arrow-bttn" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pages;
