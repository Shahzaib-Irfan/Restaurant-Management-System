import { React, useState, useEffect } from "react"; // Remove 'React' import here
import styled from "styled-components";
import back from "../../../assets/icons/back.svg";
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import DisplayDish from "./Dish";
import { useDishesContext } from "../../../contexts/DishContext";

const Dishes = () => {
  const History = useNavigate();
  const { id } = useParams();
  const { dishes, fetchDishesByRID, handleSetModeUpdate } = useDishesContext();
  useEffect(() => {
    fetchDishesByRID(id);
  }, []);
  return (
    <Rooms>
      <div className="container">
        <div className="left">
          <div className="left-container">
            <div className="left-container-item">
              <Link to={`/itemselection/restaurants`}>
                <img src={back} alt="Back" />
              </Link>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="right-top" style={{ marginTop: "10px" }}>
            <h2>Add to Cart</h2>
          </div>
          <div className="right-bottom">
            <div className="section">
              <div className="room-container">
                {dishes.length !== 0 ? (
                  dishes.map((dish, index) => {
                    const {
                      _id,
                      name,
                      ingredients,
                      description,
                      price,
                      image,
                    } = dish;
                    return <DisplayDish {...dish} restaurantID={id} />;
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
    width: 100%;
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
export default Dishes;
