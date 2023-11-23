import React, { useEffect } from "react";
import styled from "styled-components";
import Loading from "../../../constants/Loading";
import DisplayUserBooking from "./DisplayUserBooking";
import { useUserContext } from "../../../contexts/UserContext";

const UserBookings = () => {
  const {
    singleUserOrdersLoading,
    singleUserOrders,
    singleUserOrdersError,
    fetchSingleUserOrders,
    currentUser,
  } = useUserContext();

  useEffect(() => {
    if (token !== "") {
      fetchSingleUserOrders(
        `http://localhost:3005/orderApi/orders/getSingleUserOrders/${currentUser._id}`
      );
    }
  }, []);

  if (singleUserOrdersLoading || singleUserOrdersError) {
    return <Loading />;
  } else if (singleUserOrders.length === 0) {
    return (
      <BookingsWrapper>
        <div className="no-rooms">
          <h2>You have not order anything at the moment!</h2>
        </div>
      </BookingsWrapper>
    );
  } else {
    return (
      <BookingsWrapper>
        <div className="right-top">
          <center style={{ height: "40px" }}>
            <h1>Your Orders</h1>
          </center>
        </div>
        <div className="right-bottom">
          <div className="section">
            <div className="room-container">
              {singleUserOrders.map((order, index) => {
                return (
                  <DisplayUserBooking
                    {...order}
                    count={singleUserOrders.length}
                  />
                );
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

export default UserBookings;
