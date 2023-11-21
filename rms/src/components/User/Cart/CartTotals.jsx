import React from "react";
import axios from "axios";
import styled from "styled-components";
import { useCartContext } from "../../../contexts/CartContext";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../contexts/UserContext";

const CartTotals = () => {
  const { amountPayable, shippingFee, cart } = useCartContext();
  const { currentUser, loginWithAuthentication, token } = useUserContext();
  const pay = async () => {
    try {
      const updateCart = { cart: cart, user: currentUser.id };
      console.log(cart);
      const response = await axios.post(
        "http://localhost:3005/paymentApi/pay",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: updateCart,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("An error occurred while posting the data.", error);
    }
  };
  return (
    <Wrapper>
      <div>
        <article>
          <h5>
            subtotal: <span>{amountPayable}</span>
          </h5>
          <p>
            shipping fee: <span>{shippingFee}</span>
          </p>
          <hr />
          <h4>
            order total: <span>{amountPayable + shippingFee}</span>
          </h4>
        </article>
        {token !== "" ? (
          <button onClick={() => pay()} className="btn2">
            checkout
          </button>
        ) : (
          <Link to={"/login"} className="btn2">
            login
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }
  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
  }
`;

export default CartTotals;
