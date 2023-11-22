import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useRestaurantsContext } from "../../../contexts/RestaurantContext";
const Restaurant = ({ _id, name, address, contact, image }) => {
  const { setMode } = useRestaurantsContext();
  const handleDelete = async (e) => {
    e.preventDefault();

    // Perform the PUT request using your preferred method (e.g., fetch, axios)
    try {
      const response = await fetch(
        `http://localhost:3005/restaurantApi/restaurants/deleteRestaurant/${_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response as needed
    } catch (error) {
      console.error("Error updating dish:", error);
    }
  };

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
            <p style={{ color: "grey" }}>{contact}</p>
          </div>
          <div>
            <Link
              to={`/managerestaurants/viewrestaurant/${_id}`}
              className="btn"
            >
              Details
            </Link>
            {setMode === "Update" ? (
              <Link
                to={`/managerestaurants/updaterestaurant/${_id}`}
                className="btn"
              >
                Update
              </Link>
            ) : setMode === "Delete" ? (
              <form onSubmit={(e) => handleDelete(e)}>
                <button type="submit" className="btn">
                  Delete
                </button>
              </form>
            ) : null}
          </div>
        </div>
      </RoomWrapper>
    </>
  );
};

const RoomWrapper = styled.div`
  .room-box {
    width: 100%;
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
    height: 55%;
    width: 260;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  .room-box-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    gap: 2;
    justify-content: space-between;
    padding: 10px;
    gap: 2;
  }
  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
  }
  @media (max-width: 768px) {
    .room-box {
      width: 100%;
    }
  }
`;
export default Restaurant;
