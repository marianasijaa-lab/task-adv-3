import { useState } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import SectionHeader from "../components/SectionHeader";
import PageHeroCard from "../components/PageHeroCard";
import IconCard from "../components/IconCard";
import FilterButtons from "../components/FilterButtons";
import langArtsImg from "../assets/Language Arts.png";
import mathImg from "../assets/Mathematics.png";
import scienceImg from "../assets/Science.png";
import socialStudiesImg from "../assets/Social Studies.png";
import artsAndCraftsImg from "../assets/Arts and Crafts.png";
import physicalEdImg from "../assets/Physical Education.png";
import {
  FaPencilAlt,
  FaStar,
} from "react-icons/fa";
import type { ReactNode } from "react";
import { HiBookOpen, HiChartBar, HiPuzzlePiece } from "react-icons/hi2";
import { IoIosSunny } from "react-icons/io";

/* ── SPECIAL FEATURES DATA ── */
interface SpecialFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

const specialFeatures: SpecialFeature[] = [
  {
    icon: <HiBookOpen />,
    title: "Thematic Learning",
    description:
      "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
  },
  {
    icon: <HiChartBar />,
    title: "STEAM Education",
    description:
      "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
  },
  {
    icon: <HiPuzzlePiece />,
    title: "Language Immersion",
    description:
      "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
  },
  {
    icon: <FaPencilAlt />,
    title: "Art and Creativity",
    description:
      "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
  },
  {
    icon: <IoIosSunny />,
    title: "Outdoor Education",
    description:
      "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
  },
  {
    icon: <FaStar />,
    title: "Play-Based Learning",
    description:
      "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
  },
];

/* ── ROOMS GALLERY DATA ── */
type RoomCategory = "All" | "Classrooms" | "Library" | "Science Lab" | "Computer Lab" | "Garden and Nature Area";

interface Room {
  id: number;
  name: string;
  category: Exclude<RoomCategory, "All">;
  description: string;
  images: string[];
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Classrooms",
    category: "Classrooms",
    description: "Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.",
    images: ["/classroom1.png", "/classroom2.png", "/classroom3.png", "/classroom4.png"],
  },
  {
    id: 2,
    name: "Library",
    category: "Library",
    description: "Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development.",
    images: ["/library1.png","/library2.png", "/library3.png", "/library4.png"],
  },
  {
    id: 3,
    name: "Science Lab",
    category: "Science Lab",
    description: "Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.",
    images: ["/science-lab1.png", "/science-lab2.png", "/science-lab3.png", "/science-lab4.png"],
  },
  {
    id: 4,
    name: "Computer Lab",
    category: "Computer Lab",
    description: "Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills.",
    images: ["/computer-lab1.png", "/computer-lab2.png", "/computer-lab3.png", "/computer-lab4.png"],
  },
  {
    id: 5,
    name: "Garden and Nature Area",
    category: "Garden and Nature Area",
    description: "Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.",
    images: ["/garden1.png", "/garden2.png", "/garden3.png", "/garden4.png"],
  },
];

/* ── WHAT STUDENTS LEARN DATA ── */
interface Subject {
  title: string;
  description: string;
  image: string;
}

const subjects: Subject[] = [
  {
    title: "Language Arts",
    description: "Reading, writing, storytelling, and communication skills.",
    image: langArtsImg,
  },
  {
    title: "Mathematics",
    description: "Number sense, basic operations, problem-solving, and logic.",
    image: mathImg,
  },
  {
    title: "Science",
    description: "Exploring the natural world through hands-on experiments and investigations.",
    image: scienceImg,
  },
  {
    title: "Social Studies",
    description: "Cultivating an understanding of diverse cultures and communities.",
    image: socialStudiesImg,
  },
  {
    title: "Arts and Crafts",
    description: "Encouraging creativity through various art forms and crafts.",
    image: artsAndCraftsImg,
  },
  {
    title: "Physical Education",
    description: "Promoting physical fitness, coordination, and teamwork.",
    image: physicalEdImg,
  },
];

/* ── ROOM CARD with image slider ── */
function RoomGalleryCard({ room }: { room: Room }) {
  const [current, setCurrent] = useState(0);
  const total = room.images.length;
  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  return (
    <div className="rg-card">

      <div className="rg-images-wrap">
        <div className="rg-line" />
        <div className="rg-images">
          {room.images.map((img, i) => (
            <div
              key={i}
              className={`rg-img-box${i === current ? " rg-active" : ""}`}
              onClick={() => setCurrent(i)}
            >
              <img src={img} alt={`${room.name} ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Info row */}
      <div className="rg-info">
        <div className="rg-info-top">
          <h3>{room.name}</h3>
          <div className="rg-nav-btns">
            <button className="rg-nav-btn" onClick={prev} aria-label="Previous">&#8592;</button>
            <button className="rg-nav-btn" onClick={next} aria-label="Next">&#8594;</button>
          </div>
        </div>
        <p>{room.description}</p>
      </div>
    </div>
  );
}

/* ── COMPONENT ── */
export default function Academics() {
  const [activeFilter, setActiveFilter] = useState<RoomCategory>("All");

  const filters: RoomCategory[] = ["All", "Classrooms", "Library", "Science Lab", "Computer Lab", "Garden and Nature Area"];

  const filtered = activeFilter === "All"
    ? rooms
    : rooms.filter((r) => r.category === activeFilter);

  return (
    <>
      <Navbar />

      {/* ── ACADEMICS HERO ── */}
      <PageHeroCard
        tag="Academics"
        title={"Nurturing Young Minds\nfor Success"}
        description="Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."
      />

      {/* ── SPECIAL FEATURES ── */}
      <section className="acad-features-section">
        <div className="container">
          <div className="acad-section-header">
            <SectionHeader
              tag="Our Features"
              title="Our Special Features"
              description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
            />
          </div>

          <div className="acad-features-grid">
            {specialFeatures.map((f, i) => (
              <IconCard
                key={i}
                icon={f.icon}
                title={f.title}
                description={f.description}
                className="acad-feature-card"
                iconClassName="acad-feature-icon"
              />
            ))}
          </div>
        </div>
      </section>

      
      {/* ── WHAT STUDENTS LEARN ── */}
      <section className="acad-learn-section">
        <div className="container">
          <div className="acad-section-header">
            <SectionHeader
              tag="Our Features"
              title="What Students Learn"
              description="At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
            />
          </div>

          <div className="acad-subjects-grid">
            {subjects.map((s, i) => (
              <div key={i} className="acad-subject-card">
                <div className="acad-subject-img-wrap">
                  <img src={s.image} alt={s.title} />
                  <div className="acad-subject-bar" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── ROOMS GALLERY ── */}
      <section className="acad-gallery-section">
        <div className="container">
          <div className="acad-section-header">
            <SectionHeader
              tag="Our Gallery"
              title="Our Rooms Gallery"
              description="Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
            />
          </div>

          {/* Filter buttons */}
          <FilterButtons<RoomCategory>
            filters={filters}
            active={activeFilter}
            onChange={setActiveFilter}
            className="acad-filters"
            buttonClassName="acad-filter-btn"
          />

          {/* Room cards */}
          <div className="acad-rooms-list">
            {filtered.map((room) => (
              <RoomGalleryCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
}
