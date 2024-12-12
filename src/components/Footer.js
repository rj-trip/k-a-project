// import React from "react";
// import "../styles/Footer.css";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
// } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <div className="footer-column">
//           <h3 className="footer-heading">Quick Links</h3>
//           <ul className="footer-list">
//             <li>
//               <a href="#">Home</a>
//             </li>
//             <li>
//               <a href="#">Work</a>
//             </li>
//             <li>
//               <a href="#">Expertise</a>
//             </li>
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Insights</a>
//             </li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h3 className="footer-heading">Contact</h3>
//           <ul className="footer-list">
//             <li>
//               <a href="#">hello@company.com</a>
//             </li>
//             <li>
//               <a href="#">+1 (123) 456-7890</a>
//             </li>
//           </ul>
//         </div>
//         <div className="footer-column">
//           <h3 className="footer-heading">Follow Us</h3>
//           <div className="social-icons">
//             <a href="#" className="social-icon">
//               <FaFacebookF />
//             </a>
//             <a href="#" className="social-icon">
//               <FaTwitter />
//             </a>
//             <a href="#" className="social-icon">
//               <FaLinkedinIn />
//             </a>
//             <a href="#" className="social-icon">
//               <FaYoutube />
//             </a>
//           </div>
//         </div>
//       </div>
//       <div className="footer-bottom">
//         <p className="copyright">
//           &copy; 2023 Company Name. All rights reserved.
//         </p>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import React from "react";
import "../styles/Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-list">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Expertise</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Insights</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-list">
            <li>
              <a href="#">hello@company.com</a>
            </li>
            <li>
              <a href="#">+1 (123) 456-7890</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3 className="footer-heading">Follow Us</h3>
          <ul className="footer-list">
            <li>
              <a href="#">hello@company.com</a>
            </li>
            <li>
              <a href="#">+1 (123) 456-7890</a>
            </li>
            <li>
              <a href="#">hello@company.com</a>
            </li>
            <li>
              <a href="#">+1 (123) 456-7890</a>
            </li>
          </ul>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="#" className="social-icon">
              <FaTwitter />
            </a>
            <a href="#" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="#" className="social-icon">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          &copy; 2023 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
