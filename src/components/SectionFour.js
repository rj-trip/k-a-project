import React from "react";
import "../styles/SectionFour.css";
import img2 from "./img2.jpg";
function SectionFour() {
  return (
    <section className="section-four">
      <div className="image-container">
        <img src={img2} alt="Innovation" className="section-four-image" />
      </div>
    </section>
  );
}

export default SectionFour;
