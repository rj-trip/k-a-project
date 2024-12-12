import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import img from "./logo.png";
import { motion, useScroll } from "framer-motion";

function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Listen for scroll changes
    const unsubscribe = scrollY.onChange((latest) => {
      if (latest > lastScrollY && latest > 150) {
        setHidden(true); // Hide header on scroll down
      } else {
        setHidden(false); // Show header on scroll up
      }
      setLastScrollY(latest); // Update last scroll position
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [scrollY, lastScrollY]);

  return (
    <motion.header
      variants={{
        visible: { y: "0%" }, // Position the header in view
        hidden: { y: "-100%" }, // Move header out of view
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="header"
    >
      <div className="logo">
        <img src={img} alt="k&a Logo" className="logo-img" />
      </div>
      <nav className="navbar">
        <ul className="nav-links">
          <li>WORK</li>
          <li>EXPERTISE</li>
          <li>ABOUT</li>
          <li>INSIGHT</li>
        </ul>
        <button className="btn-start">START A PROJECT</button>
      </nav>
    </motion.header>
  );
}

export default Header;
