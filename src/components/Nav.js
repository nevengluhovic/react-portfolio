import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "55%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">Our Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "55%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "55%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #292929;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    text-decoration: none;
    color: white;
    font-size: 1rem;
  }
  ul {
    list-style: none;
    display: flex;
  }
  #logo {
    font-family: "lobster", "incursive";
    font-size: 2rem;
    font-weight: lighter;
  }
  li {
    padding-left: 5rem;
    position: relative;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  width: 5%;
  background: #23d997;
  position: absolute;
  bottom: -80%;
`;

export default Nav;
