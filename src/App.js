// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import Header from "./components/Header";
// import MiddleSection from "./components/MiddleSection";
// import Footer from "./components/Footer";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <MiddleSection />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// App.js
import React from "react";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import MidofFourFive from "./components/MidofFourFive";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <MidofFourFive />
      <SectionFive />
      <SectionSix />
      <Footer />
    </div>
  );
}

export default App;
