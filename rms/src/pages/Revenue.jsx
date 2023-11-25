import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { useUserContext } from "../contexts/UserContext";
import { useDishesContext } from "../contexts/DishContext";
import Loading from "../constants/Loading";
import axios from "axios";

const calculateTotalRevenue = (payments) => {
  return payments.reduce((total, payment) => total + payment.amount, 0);
};

const RevenuePage = () => {
  const { loading, setLoading } = useRoomsContext();
  const [payments, setPayments] = useState([]);
  const totalRevenue = calculateTotalRevenue(payments);
  useEffect(() => {
    const fetchPayments = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://smoggy-cheddar-banon.glitch.me/payments/getAllPayments`
        );
        const data = response.data;
        console.log(data);
        setPayments(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      }
    };
    fetchPayments();
  }, []);
  if (loading) {
    return <Loading />;
  } else {
    return (
      <Wrapper>
        <Header>Payment Details</Header>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment) => (
              <tr key={payment.id}>
                <td>{payment.bookingId}</td>
                <td>Rs. {payment.amount}/-</td>
              </tr>
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
