import React from "react";
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
  background-color: rgba(16, 66, 143, 0.6);
  border-color: transparent;

  .logo img {
    width: 5rem;
    padding-top: 9px;
  }
`;

const NavBar = () => {
  return (
    <Nav className="nav-style">
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
