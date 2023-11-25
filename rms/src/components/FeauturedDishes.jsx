import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DisplayDish from "./Admin/Dishes/DisplayDish";
import { useUserContext } from "../contexts/UserContext";
import { useDishesContext } from "../contexts/DishContext";

const FeaturedRooms = () => {
  const { featured } = useDishesContext();
  const { currentUser, token } = useUserContext();
  return (
    <>
      <Wrapper className="section">
        <div className="title">
          <center>
            <h2>Featured Dishes</h2>
          </center>
          <div className="underline"></div>
        </div>
        <div className="section-center featured">
          {featured.map((dish) => {
            return <DisplayDish key={dish.id} {...dish} />;
          })}
        </div>
        {currentUser ? (
          currentUser["role"] === "admin" ? (
            <Link to="/managerooms" className="btn">
              Manage Rooms
            </Link>
          ) : (
            <Link to="/itemselection/restaurants" className="btn">
              All Rooms
            </Link>
          )
        ) : null}
      </Wrapper>
      ;
    </>
  );
};

const Wrapper = styled.section`
  background: hsl(210, 36%, 96%);
  .featured {
    width: 100%;
    margin: 2rem auto;
    display: grid;
    flex-direction: row;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedRooms;
