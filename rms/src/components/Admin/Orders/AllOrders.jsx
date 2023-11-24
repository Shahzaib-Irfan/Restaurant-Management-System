import React, { useEffect } from "react";
import styled from "styled-components";
import Loading from "../../../constants/Loading";
import DisplayUserOrder from "../../User/Bookings/DisplayUserOrder";
import { useUserContext } from "../../../contexts/UserContext";

const UserOrders = () => {
  const { isOrdersLoading, orders, userOrdersError, fetchUserOrders } =
    useUserContext();

  useEffect(() => {
    fetchUserOrders(`http://localhost:3005/orderApi/orders/getOrders`);
  }, []);

  if (isOrdersLoading || userOrdersError) {
    return <Loading />;
  } else if (orders.length === 0) {
    return (
      <BookingsWrapper>
        <div className="no-rooms">
          <h2>We have no orders at the moment!</h2>
        </div>
      </BookingsWrapper>
    );
  } else {
    return (
      <BookingsWrapper>
        <div className="right-top">
          <center style={{ height: "40px" }}>
            <h1>Orders</h1>
          </center>
        </div>
        <div className="right-bottom">
          <div className="section">
            <div className="room-container">
              {orders.map((order, index) => {
                return <DisplayUserOrder {...order} count={orders.length} />;
              })}
            </div>
          </div>
        </div>
      </BookingsWrapper>
    );
  }
};

const BookingsWrapper = styled.div`
  position: relative;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .right-top {
    height: 45%;
  }

  .right-bottom {
    position: relative;
    height: 55%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 768px) {
    .right-bottom {
      flex-direction: column;
    }
  }
  @media (max-width: 1192px) {
    .right-bottom {
      flex-direction: column;
    }
  }
`;

export default UserOrders;
