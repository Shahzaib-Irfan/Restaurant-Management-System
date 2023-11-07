import React from "react";
import HeroContent from "./HeroContent";
import FeaturedRooms from "./FeaturedRooms";
import Services from "./Services";
import NewsLetter from "./NewsLetter";
import styled from "styled-components";
import { useAuthContext } from "../contexts/AuthContext";
const Home = () => {
  const { isAuthenticated, user } = useAuthContext();
  return (
    <>
      <Hero>
        <HeroContentWrapper>
          <HeroContent />
        </HeroContentWrapper>
      </Hero>
      <FeaturedRooms />
      <Services />
      <NewsLetter />
    </>
  );
};

const Hero = styled.div`
  position: relative;
  background-image: url("./assets/pexels-erica-zhao-26702738000.jpg");
  background-size: cover;
  height: 100vh; /* Set the height to cover the viewport */
  background-repeat: no-repeat;

  @media (max-width: 1192px) {
    background-image: url("./assets/pexels-erica-zhao-267027380005000.jpg");
  }

  @media (max-width: 768px) {
    background-image: url("./assets/pexels-erica-zhao-2670273.jpg");
  }
`;

const HeroContentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Home;
