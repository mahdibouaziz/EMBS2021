import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Burger from "./Burger";
import ContextNavProvider from "./ContextNav";
import logo from "./embs_logo.png";
import { Link } from "react-router-dom";

const Nav = styled.nav`
  width: 100%;
  height: ${({ posit }) => (posit ? "4.7rem" : "6.3rem")};
  padding: 0 1rem;
  border-bottom: 2px solid #f1f1f1;
  display: fixe;
  justify-content: space-between;
  position: fixed;
  z-index: 99;
  left: 0px;
  ${"" /* Loun el navbar */}
  /* background-color: ${(props) =>
    props.posit ? "#fff" : "rgba(0, 0, 0, 0)"}; */
  
  background-color: ${(
    props
  ) =>
    props.posit
      ? props.theme === "light"
        ? "#fff"
        : "#333"
      : "rgba(0, 0, 0, 0)"};

  border-color: transparent;
  box-shadow: ${(props) =>
    props.posit
      ? "0 1px 3px 0 rgba(0, 0, 0, 0.16), 0 1px 3px 0 rgba(0, 0, 0, 0.12)"
      : null};

  transition: all 0.3s ease-in-out;
`;

const DefaultContainer = styled.div`
  width: 100%;
  padding: 0 0.75rem;
  margin: auto;

  /* Medium (md) */
  @media (min-width: 768px) {
    width: 750px;
    padding: 0 1rem;
  }

  /* Medium (md+) */
  @media (min-width: 992px) {
    width: 970px;
  }

  /* Large (lg) */
  @media (min-width: 1200px) {
    width: 1170px;
  }

  /* Large (lg) */
  @media (min-width: 1200px) {
    width: 1170px;
  }

  /* Large (lg) */
  @media (min-width: 1600px) {
    width: 100%;
    padding: 0 10rem;
  }
`;

const Container = styled(DefaultContainer)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const Spacer = styled.div`
  flex: 1 1 0;
`;

const Logo = styled.img`
  height: 3.5rem;
`;

const NavBar = (props) => {
  const [headerShow, setHeaderShow] = useState(false);
  const { theme } = props;

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
    <Nav className="nav-style" posit={headerShow} theme={theme}>
      <ContextNavProvider>
        <Container>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
          <Spacer />
          <Burger theme={theme} />
        </Container>
      </ContextNavProvider>
    </Nav>
  );
};

export default NavBar;
