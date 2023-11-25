import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDishesContext } from "../../../contexts/DishContext";
import { useRestaurantsContext } from "../../../contexts/RestaurantContext";
import { useUserContext } from "../../../contexts/UserContext";
import Loading from "../../../constants/Loading";

const DisplayPayment = ({ _id, userID, dishID, totalAmount, status }) => {
  const { singleDish, loading, fetchSingleDish, singleDishError } =
    useDishesContext();

  const { singleUser, singleUserLoading, singleUserError, fetchSingleUser } =
    useUserContext();
  const [dishData, setDishData] = useState({
    name: "",
    price: 0,
    image: "",
  });

  const [username, setUsername] = useState("");

  useEffect(() => {
    if (singleDish._id === dishID) {
      setDishData({
        name: singleDish.name,
        price: singleDish.price,
        image: singleDish.image,
      });
    }
  }, [singleDish]);

  useEffect(() => {
    if (singleUser._id === userID) {
      setUsername(singleUser.username);
    }
  }, [singleUser]);

  useEffect(() => {
    fetchSingleDish(
      `http://localhost:3005/dishApi/dishes/getSingleDish/${dishID}`
    );
  }, [dishID]);

  useEffect(() => {
    fetchSingleUser(
      `http://localhost:3005/userApi/users/getSingleUser/${userID}`
    );
  }, [userID]);

  if (!singleDishError || !singleUserError)
    return (
      <tr key={_id}>
        <td>{username}</td>
        <td>{dishData.name}</td>
        <td>{dishData.price}</td>
        <td>Rs. {totalAmount}/-</td>
      </tr>
    );
  else {
    return <Loading />;
  }
};

const RoomWrapper = styled.div`
  width: 25vw;
  margin: 6px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  posistion: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1192px) {
    width: 40%;
  }

  .room-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .image-wrapper {
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 5px 5px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.2s, opacity 0.2s;
    }
  }

  .info-wrapper {
    width: 100%;
    padding: 10px;
    text-align: center;
  }

  .room-name {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .room-dates {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #555555;
  }

  .arrival,
  .departure,
  .arrivalStatus {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #999999;
  }

  .value {
    font-size: 0.9rem;
  }

  .interactions {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .details-btn {
    display: inline-block;
    padding: 8px 20px;
    background-color: #3498db;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    text-decoration: none;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #2980b9;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const SingleRoomWrapper = styled.div`
  width: 100%;
  margin: 6px;
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .room-box {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .image-wrapper {
    width: 100%;
    height: 180px;
    overflow: hidden;
    border-radius: 5px 5px 0 0;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.2s, opacity 0.2s;
    }
  }

  .info-wrapper {
    width: 100%;
    padding: 10px;
    text-align: center;
  }

  .room-name {
    font-size: 1.25rem;
    font-weight: 600;
  }

  .room-dates {
    display: flex;
    flex-direction: column;
    gap: 5px;
    color: #555555;
  }

  .arrival,
  .departure,
  .arrivalStatus {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .label {
    font-size: 0.9rem;
    font-weight: 600;
    color: #999999;
  }

  .value {
    font-size: 0.9rem;
  }

  .interactions {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .details-btn {
    display: inline-block;
    padding: 8px 20px;
    background-color: #3498db;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    text-decoration: none;
    transition: background-color 0.2s;
    cursor: pointer;

    &:hover {
      background-color: #2980b9;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export default DisplayPayment;
