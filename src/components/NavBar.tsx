import { useState } from "react";
import { NavLink } from "react-router-dom";
import topBanner from "../assets/TOP BANNER.png";
import { FaBars, FaArrowRight, FaTimes } from "react-icons/fa";
import Logo from "./Logo";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Academics", to: "/academics" },
    { label: "Admissions", to: "/admissions" },
    { label: "Student Life", to: "/student-life" },
  ];

  return (
    <div className="nav-wrapper container">
      <div
        className="top-bar"
        style={{ backgroundImage: `url(${topBanner})` }}
      >
        <div className="top-bar-content">
          <span className="top-bar-text">
            Admission is Open, Grab your seat now
          </span>
          <FaArrowRight className="top-bar-arrow-icon" aria-hidden />
        </div>
      </div>

      <nav className="navbar">
        <Logo />

        <ul className={`nav-links${open ? " open" : ""}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/contact"
              className="nav-link contact-link"
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
    </div>
  );
}
