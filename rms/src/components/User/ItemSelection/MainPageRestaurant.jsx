import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRestaurantsContext } from "../../../contexts/RestaurantContext";
const Restaurant = ({ _id, name, address, contact, image }) => {
  return (
    <>
      <RoomWrapper>
        <div className="room-box">
          <img
            onClick={() => {}}
            src={`http://localhost:3005/images/${image}`}
            alt={name}
            style={{ cursor: "pointer" }}
          />
          <div className="room-box-footer">
            <p style={{ color: "green" }}>{name}</p>
            <p style={{ color: "blue" }}>{address}</p>
          </div>
          <Link to={`/itemselection/restaurants/${_id}`} className="btn">
            Select
          </Link>
        </div>
      </RoomWrapper>
    </>
  );
};

const RoomWrapper = styled.div`
  .room-box {
    width: 33vw;
    margin: 6px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .room-box img {
    height: 70%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  .room-box-footer {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    gap: 2;
  }
  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
  }
  @media (max-width: 1192px) {
    .room-box {
      width: 30vw;
    }
  }
  @media (max-width: 768px) {
    .room-box {
      width: 75vw;
    }
  }
`;
export default Restaurant;
