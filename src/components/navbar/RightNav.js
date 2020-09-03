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
    font-size: 1rem;
    transition: all 0.4s ease-in-out;
    border-radius: 6px;
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: 768px) {
    padding-top: 5rem;
    margin-right: 0rem;
    align-items: start;
    flex-flow: column nowrap;
    background-color: rgba(255, 255, 255, 1);
    z-index: 19;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    transition: transform 0.3s ease-in-out;

    a {
      color: #000;
      text-decoration: none;
      width: 100%;
    }
  }
`;

const StyledNavlink = styled(NavLink)`
  color: ${(props) => (props.posit ? "#000" : "#fff")};
  margin: 0 0.25rem;
  padding: 0.5rem 1rem;
  &.active {
    color: ${(props) => (props.posit ? "rgb(18, 18, 225)" : "#fff")};
  }

  &:hover {
    color: ${(props) => (props.posit ? "rgb(18, 18, 225)" : "#fff")};
    background: ${(props) => (props.posit ? null : "rgba(0,0,0,0.15)")};
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    &.active {
      color: rgb(18, 18, 225);
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

const RightNav = () => {
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
  const { open, setOpen } = useContext(ContextNav);
  return (
    <UL posit={headerShow} open={open}>
      {Links.map((e) => (
        <StyledNavlink
          key={e.href}
          exact={e.exact}
          onClick={() => setOpen(!open)}
          to={e.href}
          posit={headerShow}
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
