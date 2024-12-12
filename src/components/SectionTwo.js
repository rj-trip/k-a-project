// import React from "react";
// import "../styles/SectionTwo.css";

// function SectionTwo() {
//   return (
//     <section className="section-two">
//       <div className="content">
//         <h2>We are</h2>
//         <p>
//           Experience the power of speed with our cutting-edge hosting infrastructure.
//         </p>
//       </div>
//       <div className="image">
//         <img src="path/to/image1.jpg" alt="Decorated Content" />
//       </div>
//     </section>
//   );
// }

// export default SectionTwo;

import React from "react";
import "../styles/SectionTwo.css";
import img1 from "./img1.jpg";
function SectionTwo() {
  return (
    <section className="section-two">
      <div className="content">
        <h2 className="section-two-heading">
          <span className="special">We are</span>
        </h2>
        <h3 className="section-two-heading2">
          Creative Designers, Insightful Strategists, and Exceptional Engineers
        </h3>
        <p className="section-two-description">
          The organization is focused on foregrounding expertise in its
          services, staying updated on global trends, refining domain knowledge,
          and adapting to evolving content creation arenas to effectively serve
          client brands.
        </p>
      </div>
      <div className="image">
        <img
          src={img1}
          alt="Creative Designers, Insightful Strategists, and Exceptional Engineers"
          className="section-two-image"
        />
      </div>
    </section>
  );
}

export default SectionTwo;
