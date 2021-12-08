import React from "react";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Animations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";

function OurWork() {
  return (
    <Work
      style={{ background: "#ffff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame variants={slider}></Frame>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athlete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <Hide>
            <motion.img variants={photoAnim} src={athlete} alt="" />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/work/the-racer">
          <img src={theracer} alt="" />
        </Link>
      </Movie>
      <Movie>
        <h2>Goodtimes</h2>
        <div className="line"></div>
        <Link to="/work/good-times">
          <img src={goodtimes} alt="" />
        </Link>
      </Movie>
    </Work>
  );
}

const Work = styled(motion.div)`
  padding: 5rem 10rem;
  min-height: 100vh;
  overflow: hidden;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Movie = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled(motion.div)`
  overflow: hidden;
`;

const Frame = styled(motion.div)`
  position: fixed;
  top: 10%;
  left: 0%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;

const Frame2 = styled(Frame)`
  background: #ff8efb;
`;

const Frame3 = styled(Frame)`
  background: #8ed2ff;
`;

const Frame4 = styled(Frame)`
  background: #8effa0;
`;
export default OurWork;
