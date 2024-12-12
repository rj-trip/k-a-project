// import React, { useEffect } from "react";
// import "../styles/Header.css";
// import img from "./logo.png";
// import { useState } from "react";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";
// function Header() {
//   const { scrollY } = useScroll();
//   const [hidden, setHidden] = useState(false);

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious();
//     if (latest > previous && latest > 150) {
//       setHidden(true); // Hide header on scroll down
//     } else {
//       setHidden(false); // Show header on scroll up
//     }
//     console.log(latest);
//   });
//   useEffect(() => {
//     const unsub = scrollY.on("change", (latest) => console.log(latest));
//     return () => unsub();
//   }, [scrollY]);
//   return (
//     <motion.header
//       variants={{
//         visible: { y: "0" },
//         hidden: { y: "-100%" },
//       }}
//       animate={hidden ? "hidden" : "visible"}
//       transition={{ duration: 0.35, ease: "easeInOut" }}
//       className="header"
//     >
//       <div className="logo">
//         <img src={img} alt="k&a Logo" className="logo-img" />
//       </div>
//       <nav className="navbar">
//         <ul className="nav-links">
//           <li>WORK</li>
//           <li>EXPERTISE</li>
//           <li>ABOUT</li>
//           <li>INSIGHT</li>
//         </ul>
//         <button className="btn-start">START A PROJECT</button>
//       </nav>
//     </motion.header>
//   );
// }

// export default Header;

// import React, { useState } from "react";
// import "../styles/Header.css";
// import img from "./logo.png";
// import { motion, useScroll, useMotionValueEvent } from "framer-motion";

// function Header() {
//   const { scrollY } = useScroll();
//   const [hidden, setHidden] = useState(false); // Correct initialization

//   useMotionValueEvent(scrollY, "change", (latest) => {
//     const previous = scrollY.getPrevious(); // Get the previous scroll position
//     if (latest > previous && latest > 150) {
//       setHidden(true); // Hide header on scroll down
//     } else {
//       setHidden(false); // Show header on scroll up
//     }
//   });

//   return (
//     <motion.header
//       variants={{
//         visible: { y: "0" }, // Position the header in view
//         hidden: { y: "-100%" }, // Move header out of view
//       }}
//       animate={hidden ? "hidden" : "visible"}
//       transition={{ duration: 0.35, ease: "easeInOut" }}
//       className="header"
//     >
//       <div className="logo">
//         <img src={img} alt="k&a Logo" className="logo-img" />
//       </div>
//       <nav className="navbar">
//         <ul className="nav-links">
//           <li>WORK</li>
//           <li>EXPERTISE</li>
//           <li>ABOUT</li>
//           <li>INSIGHT</li>
//         </ul>
//         <button className="btn-start">START A PROJECT</button>
//       </nav>
//     </motion.header>
//   );
// }

// export default Header;

import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import img from "./logo.png";
import { motion } from "framer-motion";

function Header() {
  const [hidden, setHidden] = useState(false); // Track header visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        setHidden(true); // Hide the header when scrolling down
      } else {
        setHidden(false); // Show the header when scrolling up
      }

      setLastScrollY(currentScrollY); // Update the last scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: "0%" }}
      animate={{ y: hidden ? "-100%" : "0%" }}
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
