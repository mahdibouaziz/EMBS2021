import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { ContextNav } from "./ContextNav";

const UL = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  a {
    margin-top: 0.7rem;
    padding: 0px 1rem;
    color: ${(props) => (props.posit ? "#000" : "#fff")};
    text-decoration: none;
    font-size: 1rem;
    transition: all 0.4s ease-in-out;
    border-radius: 6px;
    font-family: "Poppins", sans-serif;
  }

  a:hover {
    color: rgb(18, 18, 225);
  }

  @media (max-width: 768px) {
    margin-right: 0rem;
    flex-flow: column nowrap;
    background-color: rgba(16, 66, 143, 0.6);
    z-index: 19;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.4rem;
    transition: transform 0.3s ease-in-out;

    a {
      color: #fff;
      text-decoration: none;
    }
  }
`;

const StyledNavlink = styled(NavLink)`
  &.active {
    color: rgb(18, 18, 225);
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
