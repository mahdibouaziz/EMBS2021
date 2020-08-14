import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import ContextNavProvider from "./ContextNav";
import logo from "./embs_logo.png";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: fixe;
  justify-content: space-between;
  position: fixed;
  z-index: 99;
  left: 0px;
  ${"" /* Loun el navbar */}
  background-color: ${(props) => (props.posit ? "#fff" : "rgba(0, 0, 0, 0)")};
  border-color: transparent;
  box-shadow: ${(props) =>
    props.posit
      ? "0px 0px 13px -1px rgba(0,0,0,0.75)"
      : "0px 0px 0px 0px rgba(0,0,0,0.75)"}; 

  transition: background-color 1s;

  .logo{
    margin-left:28rem;
  }

  .logo img {
    width: 5rem;
    padding-top: 9px;
  }

  @media (max-width: 768px) {
    .logo{
    margin-left:0rem;
  }
  }
`;

const NavBar = () => {
  const [headerShow, setHeaderShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollEffect);
  });

  // Scroll effect
  const scrollEffect = () => {
    if (window.scrollY > 70) {
      setHeaderShow(true);
    } else {
      setHeaderShow(false);
    }
  };

  return (
    <Nav className="nav-style" posit={headerShow}>
      <ContextNavProvider>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <Burger />
      </ContextNavProvider>
    </Nav>
  );
};

export default NavBar;
