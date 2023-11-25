import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../contexts/UserContext";
import { useDishesContext } from "../contexts/DishContext";
import Loading from "../constants/Loading";
import axios from "axios";
import DisplayPayment from "../components/Admin/Payments/DisplayPayment";

const calculateTotalRevenue = (payments) => {
  return payments.reduce((total, payment) => total + payment.totalAmount, 0);
};

const RevenuePage = () => {
  const { orders, fetchUserOrders, isOrdersLoading, userOrdersError } =
    useUserContext();
  const [payments, setPayments] = useState([]);
  const totalRevenue = calculateTotalRevenue(orders);
  useEffect(() => {
    fetchUserOrders();
  }, []);
  if (isOrdersLoading || userOrdersError) {
    return <Loading />;
  } else {
    return (
      <Wrapper>
        <Header>Payment Details</Header>
        <Table>
          <thead>
            <tr>
              <th>User</th>
              <th>Dish</th>
              <th>Unit Price</th>
              <th>SubTotal</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <DisplayPayment {...order} />
            ))}
          </tbody>
        </Table>
        <TotalRevenue>Total Revenue: Rs. {totalRevenue}/- </TotalRevenue>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  height: auto;
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
`;

const Header = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  height: 350px;
  overflow: auto;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }
`;

const TotalRevenue = styled.p`
  text-align: right;
  font-size: 1.2em;
  font-weight: bold;
`;

export default RevenuePage;
