import React from "react";
import styled from "styled-components";

function Nav() {
  return (
    <StyledNav>
      <h1>
        <a id="logo" href="#">
          Capture
        </a>
      </h1>
      <ul>
        <li>
          <a href="">1. About us</a>
        </li>
        <li>
          <a href="">1. Our Work</a>
        </li>
        <li>
          <a href="">1. Contact Us</a>
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
  a {
    text-decoration: none;
    color: white;
  }
  ul {
    list-style: none;
    display: flex;
  }
  #logo {
    font-family: "lobster", "incursive";
    font-size: 1.5rem;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
`;

export default Nav;
