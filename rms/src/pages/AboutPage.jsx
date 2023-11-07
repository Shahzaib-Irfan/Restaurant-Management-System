import React from "react";
import styled from "styled-components";
import aboutImg from "../assets/pexels-erica-zhao-2670273.jpg";

const AboutPage = () => {
  return (
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="" />
      <article>
        <div className="title">
          <h1>About Us</h1>
          <div className="underline"></div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sequi
          aliquid at quo, quisquam vero deserunt cupiditate quidem,
          exercitationem atque minus dolore ratione hic veniam incidunt
          molestiae adipisci praesentium repellat officia numquam aliquam soluta
          quibusdam. Illo, minus. Vero similique ab dignissimos, ipsam
          reiciendis expedita molestias officia ipsa delectus quis, minus quod
          atque tenetur libero obcaecati, saepe impedit pariatur vel voluptate
          accusantium cupiditate eveniet ea debitis! Ea deserunt inventore
          explicabo voluptates, qui maxime quisquam distinctio, fugit nihil
          iusto necessitatibus enim accusantium minima. Aspernatur, iste porro
          obcaecati, ad consequatur rerum corrupti error architecto quisquam
          necessitatibus nesciunt enim voluptates saepe possimus minima dolorem!
        </p>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: 0.25rem;
    height: 550px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: hsl(210, 22%, 49%);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
