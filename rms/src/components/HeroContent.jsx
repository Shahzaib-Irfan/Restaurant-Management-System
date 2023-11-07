import React from "react";
import styled from "styled-components";
const HeroContent = () => {
  return (
    <>
      <HeroContentDiv>
        <div className="hero-content" style={{ background: "inherit" }}>
          <h1>More Presentable</h1>
          <h1>More Delicous</h1>
          <p style={{ fontWeight: "lighter" }}>
            Your taste-buds are always a priority for us
          </p>
        </div>
      </HeroContentDiv>
    </>
  );
};

const HeroContentDiv = styled.div`
  .hero-content {
    text-align: center;
    color: #fff;
    font-weight: bold;
  }
`;

export default HeroContent;
