import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import ContextNavProvider from "./ContextNav";

const Nav = styled.nav`
  width: 100%;
  height: 65px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 99;

  .logo {
    padding: 20px 0;
  }
`;

const NavBar = () => {
  return (
    <Nav>
      <ContextNavProvider>
        <div className="logo">EMBS LOGO</div>
        <Burger />
      </ContextNavProvider>
    </Nav>
  );
};

export default NavBar;
