import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import Room from "./rooms/Room";
// import { useAuthContext } from "../contexts/AuthContext";
// import { useRoomsContext } from "../contexts/RoomsContext";

const FeaturedRooms = () => {
  // const { featured, fetchFeaturedRooms } = useRoomsContext();
  // const { user, isAuthenticated } = useAuthContext();
  // useEffect(() => {
  //   fetchFeaturedRooms();
  // }, []);
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
          {/* {featured.map((room) => {
            console.log(room._id);
            return <Room key={room.id} {...room} />;
          })} */}
        </div>
        {/* {isAuthenticated ? (
          user["email"] === "shahzaibirfan1012@gmail.com" ||
          user["email"] === "shahzaibtest@mail.com" ? (
            <Link to="/managerooms" className="btn">
              Manage Rooms
            </Link>
          ) : (
            <Link to="/viewrooms" className="btn">
              All Rooms
            </Link>
          )
        ) : null} */}
      </Wrapper>
      ;
    </>
  );
};

const Wrapper = styled.section`
  background: hsl(210, 36%, 96%);
  .featured {
    margin: 4rem auto;
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
