import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import ContextNavProvider from "./ContextNav";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: fixe;
  justify-content: space-between;
  position: fixed;
  z-index: 99;
  left: -2px;
  background-color: rgba(16, 66, 143, 0.6);
  border-color: transparent;

  .logo {
    color: #fff;
    font-size: 20px;
    padding: 20px 15px;
    font-weight: bold;
    padding: 20px 0;
  }
`;

const NavBar = () => {
  return (
    <Nav className="nav-style">
      <ContextNavProvider>
        <div className="logo">EMBS LOGO</div>
        <Burger />
      </ContextNavProvider>
    </Nav>
  );
};

export default NavBar;
