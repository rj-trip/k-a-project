import React from "react";
import "../styles/SectionSix.css";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { BsMicrosoft, BsSpotify } from "react-icons/bs";

import { SiSpacex } from "react-icons/si";
const SectionSix = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <motion.p
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
        >
          <FaFacebookF /> Facebook&nbsp;&nbsp;&nbsp;
          <FaTwitter /> Twitter&nbsp;&nbsp;&nbsp;
          <FaLinkedinIn /> Linkedin&nbsp;&nbsp;&nbsp;
          <FaYoutube /> Youtube&nbsp;&nbsp;&nbsp;
          <BsMicrosoft /> Microsoft&nbsp;&nbsp;&nbsp;
          <BsSpotify /> Spotify&nbsp;&nbsp;&nbsp;
          <SiSpacex /> SpaceX&nbsp;&nbsp;&nbsp;
          <FaFacebookF /> Facebook&nbsp;&nbsp;&nbsp;
        </motion.p>
      </div>
      <div className="marquee2">
        <p>
          <FaFacebookF /> Facebook&nbsp;&nbsp;&nbsp;
          <FaTwitter /> Twitter&nbsp;&nbsp;&nbsp;
          <FaLinkedinIn /> Linkedin&nbsp;&nbsp;&nbsp;
          <FaYoutube /> Youtube&nbsp;&nbsp;&nbsp;
          <BsMicrosoft /> Microsoft&nbsp;&nbsp;&nbsp;
          <BsSpotify /> Spotify&nbsp;&nbsp;&nbsp;
          <SiSpacex /> SpaceX&nbsp;&nbsp;&nbsp;
        </p>
      </div>
    </div>
  );
};

export default SectionSix;
