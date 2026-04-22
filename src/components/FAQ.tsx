import { useState } from "react";
import SectionHeader from "./SectionHeader";

const faqs = [
  { q: "What are the school hours at Little Learners Academy?", a: "Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up." },
  { q: "Is there a uniform policy for students?", a: "Yes, we have a simple uniform policy to foster a sense of community and belonging among students." },
  { q: "What extracurricular activities are available for students?", a: "We offer a wide range of activities including arts, sports, music, and coding clubs." },
  { q: "What extracurricular activities are available for students?", a: "We offer a wide range of activities including arts, sports, music, and coding clubs." },
  { q: "How do you handle food allergies and dietary restrictions?", a: "We take allergies very seriously and work closely with parents to ensure safe meal options." },
  { q: "What is the teacher-to-student ratio at Little Learners Academy?", a: "We maintain a 1:8 teacher-to-student ratio to ensure personalized attention." },
  { q: "How do you handle discipline and behavior management?", a: "We use positive reinforcement strategies to encourage good behavior and resolve conflicts." },
  { q: "How do I apply for admission to Little Learners Academy?", a: "You can apply through our website or visit us in person to pick up an application form." },
];

const FAQ=()=> {
  const [open, setOpen] = useState<number | null>(0);
  const left = faqs.slice(0, 4);
  const right = faqs.slice(4);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  const Item = ({ item, index }: { item: typeof faqs[0]; index: number }) => (
    <div className={`faq-item ${open === index ? "faq-open" : ""}`}>
      <button className="faq-question" onClick={() => toggle(index)}>
        <span>{item.q}</span>
        <span className="faq-icon">{open === index ? "−" : "+"}</span>
      </button>
      {open === index && <p className="faq-answer">{item.a}</p>}
    </div>
  );

  return (
    <section className="faq container">
      <SectionHeader
        tag="Solutions For The Doubts"
        title="Frequently Asked Questions"
        description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
      />
      <div className="faq-grid">
        <div className="faq-col">
          {left.map((item, i) => <Item key={i} item={item} index={i} />)}
        </div>
        <div className="faq-col">
          {right.map((item, i) => <Item key={i + 4} item={item} index={i + 4} />)}
        </div>
      </div>
    </section>
  );
}
export default FAQ;