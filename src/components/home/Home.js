import React, { useState } from "react";
import CarouselPage from "./CarouselPage";
import Team from "./Team";
import Sponsors from "./Sponsors";
import FeedBack from "./FeedBack";
import { motion } from "framer-motion";
import { pageTransition } from "../bannerElements";
import styled from "styled-components";
import { useEffect } from "react";

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #242f3f;
  display: ${({ loading }) => (loading ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const Loader = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  position: relative;
  border: 4px solid #fff;
  animation: loader 2s infinite ease;

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoaderInner = styled.div`
  vertical-align: top;
  display: inline-block;
  width: 100%;
  background-color: #fff;
  animation: loader-inner 2s infinite ease-in;

  @keyframes loader-inner {
    0% {
      height: 0%;
    }
    25% {
      height: 0%;
    }
    50% {
      height: 100%;
    }
    75% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  }
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const handleLoading = (e) => setLoading(false);

  useEffect(handleLoading, []);

  return (
    <motion.div initial="out" animate="in" exit="out" variants={pageTransition}>
      <LoaderWrapper loading={loading}>
        <Loader>
          <LoaderInner></LoaderInner>
        </Loader>
      </LoaderWrapper>
      <CarouselPage />
      <Team />
      <Sponsors />
      <FeedBack />
    </motion.div>
  );
};

export default Home;
