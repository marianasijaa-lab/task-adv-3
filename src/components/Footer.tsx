import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer container">
      <div className="footer-top">
        <div className="footer-brand">
          <Logo className="footer-logo" />
          <p className="logo-paragraph">We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
          <ul className="footer-contact">
            <li><span className="contact-icon"><FaEnvelope /></span> hello@littlelearners.com</li>
            <li><span className="contact-icon"><FaPhone /></span> +91 91813 23 2309</li>
            <li><span className="contact-icon"><FaLocationDot /></span> Somewhere in the World</li>
          </ul>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Home</h4>
            <a href="#">Features</a>
            <a href="#">Our Testimonials</a>
            <a href="#">FAQ</a>
          </div>
          <div className="footer-col">
            <h4>About Us</h4>
            <a href="#">Our Mission</a>
            <a href="#">Our Vission</a>
            <a href="#">Awards and Recognitions</a>
            <a href="#">History</a>
            <a href="#">Teachers</a>
          </div>
          <div className="footer-col">
            <h4>Academics</h4>
            <a href="#">Special Features</a>
            <a href="#">Gallery</a>
          </div>
          <div className="footer-col">
            <h4>Contact Us</h4>
            <a href="#">Information</a>
            <a href="#">Map & Direction</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
        </div>
        <div className="footer-social">
          <a href="#" aria-label="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Twitter"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>

      <p className="footer-copy">Copyright © [2023] Little Learners Academy. All rights reserved.</p>
    </footer>
  );
}
