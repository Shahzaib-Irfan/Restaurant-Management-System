import { React, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTablesContext } from "../../../contexts/TableContext";
import { useRestaurantsContext } from "../../../contexts/RestaurantContext";
import Loading from "../../../constants/Loading";
const Table = ({ _id, tableNo, restaurantID, capacity, reservationStatus }) => {
  const { setMode } = useTablesContext();
  const {
    loading,
    fetchSingleRestaurant,
    singleRestaurant,
    singleRestaurantError,
  } = useRestaurantsContext();

  useEffect(() => {
    fetchSingleRestaurant(
      `http://localhost:3005/restaurantApi/restaurants/getSingleRestaurant/${restaurantID}`
    );
  });
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3005/tableApi/tables/deleteTable/${_id}`,
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

  if (loading || singleRestaurantError) {
    return <Loading />;
  } else {
    return (
      <>
        <RoomWrapper>
          <div className="room-box">
            <div className="room-box-footer">
              <p style={{ color: "green" }}>{tableNo}</p>
            </div>
            <div>
              <p style={{ color: "blue" }}>{singleRestaurant.name}</p>
            </div>
            <div>
              <p style={{ color: "grey" }}>{capacity}</p>
              {reservationStatus ? (
                <p style={{ color: "green" }}>Available</p>
              ) : (
                <p style={{ color: "orange" }}>Reserved</p>
              )}
            </div>
            <div>
              {setMode === "Update" ? (
                <Link to={`/managetables/updatetable/${_id}`} className="btn">
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
  }
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
    height: 70%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  .room-box-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
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
export default Table;
