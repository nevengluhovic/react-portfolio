import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About us</Link>
        </li>
        <li>
          <Link to="/work">1. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">1. Contact Us</Link>
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

export default Nav;
