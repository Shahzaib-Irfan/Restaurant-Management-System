import { React, useState, useEffect } from "react"; // Remove 'React' import here
import styled from "styled-components";
import plus from "../../../assets/icons/plus.svg";
import deleteImage from "../../../assets/icons/delete.svg";
import edit from "../../../assets/icons/edit.svg";
import { Link } from "react-router-dom";
import DisplayUserDish from "./DisplayUserDish";
import { useUserDishesContext } from "../../../contexts/UserDishContext";

const UserDishes = () => {
  const { userDishes, fetchUserDishes } = useUserDishesContext();
  useEffect(() => {
    fetchUserDishes();
  }, []);
  return (
    <Rooms>
      <div className="container">
        <div className="right">
          <div className="right-top" style={{ marginTop: "10px" }}>
            <h2>User Suggested Dishes</h2>
          </div>
          <div className="right-bottom">
            <div className="section">
              <div className="room-container">
                {userDishes.length !== 0 ? (
                  userDishes.map((dish, index) => {
                    const {
                      _id,
                      name,
                      ingredients,
                      description,
                      price,
                      image,
                    } = dish;
                    return (
                      <DisplayUserDish
                        _id={_id}
                        name={name}
                        ingredients={ingredients}
                        description={description}
                        price={price}
                        image={image}
                      />
                    );
                  })
                ) : (
                  <center>
                    <h1
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "50vh",
                        margin: 20,
                      }}
                    >
                      No Dishes to display
                    </h1>
                  </center>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Rooms>
  );
};

const Rooms = styled.div`
  .container {
    position: relative;
    display: flex;
    height: 100%;
  }
  .left {
    width: 20%;
    overflow: hidden;
  }
  .right {
    width: 80%;
  }

  .left-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .left-container-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    margin: auto;
    border-radius: 15px;
  }

  .left-container-item: hover {
    background-color: #e21bd7;
    color: #fff;
    transition: all 1s ease-in;
    cursor: pointer;
  }
  .left-container-item: hover .left {
    width: 20%;
  }
  .left-container-item img {
    width: 30px;
    height: 50px;
  }
  .left-container-item h3 {
    position: relative;
    margin-left: 5px;
    font-size: 16px;
    color: black;
  }
  .right-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 20%;
  }

  .right-bottom {
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    aligh-items: center;
  }

  .section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  .room-container {
    max-width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 968px) {
    .container {
      flex-direction: column;
    }
    .left,
    .right {
      width: 100%;
    }

    .left {
      height: 20%;
    }
    .right {
      height: 100%;
    }
    .right-top {
      width: 100%;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
    }
    .left-container {
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }
  }
`;
export default UserDishes;
