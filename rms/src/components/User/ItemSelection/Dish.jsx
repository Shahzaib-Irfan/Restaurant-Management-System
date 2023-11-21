import { React, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDishesContext } from "../../../contexts/DishContext";
import { useCartContext } from "../../../contexts/CartContext";
import { useRestaurantsContext } from "../../../contexts/RestaurantContext";
import Loading from "../../../constants/Loading";
const Dish = (
  { _id, name, ingredients, description, price, image, restaurantID },
  dish
) => {
  const { addToCart } = useCartContext();
  const {
    singleRestaurant,
    fetchSingleRestaurant,
    singleRestaurantError,
    loading,
  } = useRestaurantsContext();
  useEffect(() => {
    if (restaurantID !== "") {
      fetchSingleRestaurant(
        `http://localhost:3005/restaurantApi/restaurants/getSingleRestaurant/${restaurantID}`
      );
    }
  }, [restaurantID]);
  if (singleRestaurantError) {
    return <Loading />;
  } else {
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
            <div className="room-box-footer">
              <Link
                to={`/itemselection/restaurants/${restaurantID}/${_id}`}
                className="btn"
              >
                Details
              </Link>
              <button
                className="btn"
                onClick={() =>
                  addToCart(
                    _id,
                    {
                      name: singleRestaurant["name"],
                      _id: singleRestaurant["_id"],
                    },
                    Date.now(),
                    1,
                    {
                      name: name,
                      price: price,
                    }
                  )
                }
              >
                Add to Cart
              </button>
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
export default Dish;
