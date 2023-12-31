import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDishesContext } from "../../../contexts/DishContext";
const Dish = ({ _id, name, ingredients, description, price, image }) => {
  const { setMode } = useDishesContext();
  const handleDelete = async (e) => {
    e.preventDefault();

    // Perform the PUT request using your preferred method (e.g., fetch, axios)
    try {
      const response = await fetch(
        `http://localhost:3005/dishApi/dishes/deleteDish/${_id}`,
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
            <p style={{ marginLeft: "40px" }}>{"Rs. " + price + "/-"} </p>
          </div>
          <div>
            <Link to={`/managedishes/viewdish/${_id}`} className="btn">
              Details
            </Link>
            {setMode === "Update" ? (
              <Link to={`/managedishes/updatedish/${_id}`} className="btn">
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
    height: 50%;
    width: 260px;
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
      width: 120%;
    }
  }
`;
export default Dish;
