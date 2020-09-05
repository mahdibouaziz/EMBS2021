import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ContextNav } from "./ContextNav";

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;
  a {
    text-decoration: none;
    font-size: 1.1rem;
    transition: all 0.4s ease-in-out;
    border-radius: 6px;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 768px) {
    padding-top: 5rem;
    margin-right: 0rem;
    align-items: start;
    flex-flow: column nowrap;
    /* background-color: #f9f9f9; */
    background-color: ${(props) =>
      props.theme === "light" ? "#f9f9f9" : "#333"};
    z-index: 19;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    transition: transform 0.3s ease-in-out;

    a {
      text-decoration: none;
      width: 100%;
    }
  }
`;

const StyledNavlink = styled(NavLink)`
  color: ${(props) =>
    props.posit ? (props.theme === "light" ? "#000" : "#fff") : "#fff"};
  margin: 0 0.25rem;
  padding: 0.5rem 1rem;
  &.active {
    color: ${(props) =>
      props.posit
        ? props.theme === "light"
          ? "rgb(18, 18, 225)"
          : "#8defff"
        : "#fff"};
  }

  &:hover {
    color: ${(props) =>
      props.posit
        ? props.theme === "light"
          ? "rgb(18, 18, 225)"
          : "#8dffff"
        : "#fff"};
    background: ${(props) => (props.posit ? null : "rgba(0,0,0,0.15)")};
  }

  @media (max-width: 768px) {
    margin-top: 0.7rem;
    color: ${(props) => (props.theme === "light" ? "#000" : "#fff")};

    &.active {
      color: ${(props) =>
        props.theme === "light" ? "rgb(18, 18, 225)" : "#8defff"};
    }

    &:hover {
      color: ${(props) =>
        props.theme === "light" ? "rgb(18, 18, 225)" : "#8dffff"};
      background: transparent;
    }
  }
`;

const Links = [
  { name: "Home", href: "/", exact: true },
  { name: "About", href: "/about" },
  { name: "Activities", href: "/activities" },
  { name: "NewsLetter", href: "/newsletter" },
  { name: "Contact", href: "/contact" },
];

const RightNav = (props) => {
  const [headerShow, setHeaderShow] = useState(false);
  const { theme } = props;
  console.log(theme);

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
  const { open, setOpen } = useContext(ContextNav);
  return (
    <UL open={open} theme={theme}>
      {Links.map((e) => (
        <StyledNavlink
          key={e.href}
          exact={e.exact}
          onClick={() => setOpen(!open)}
          to={e.href}
          posit={headerShow}
          theme={theme}
        >
          {e.name}
        </StyledNavlink>
      ))}

      {/* <StyledNavlink
        activeClassName="active"
        onClick={() => setOpen(!open)}
        to="/"
      >
        Home
      </StyledNavlink>
      <StyledNavlink onClick={() => setOpen(!open)} to="/about">
        About
      </StyledNavlink>
      <StyledNavlink onClick={() => setOpen(!open)} to="/activities">
        Activities
      </StyledNavlink>
      <StyledNavlink onClick={() => setOpen(!open)} to="/newsletter">
        NewsLetter
      </StyledNavlink>
      <StyledNavlink onClick={() => setOpen(!open)} to="/contact">
        Contact
      </StyledNavlink> */}
    </UL>
  );
};

export default RightNav;
