import { React, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTablesContext } from "../../../contexts/TableContext";
import { useRestaurantsContext } from "../../../contexts/RestaurantContext";
import Loading from "../../../constants/Loading";
import styled from "styled-components";
import { FaShoppingBasket } from "react-icons/fa";

const SingleTable = () => {
  var { id } = useParams();
  const { loading, singleTable, fetchSingleTable, singleTableError } =
    useTablesContext();
  const { singleRestaurant, fetchSingleRestaurant, singleRestaurantError } =
    useRestaurantsContext();
  useEffect(() => {
    fetchSingleTable(
      `http://localhost:3005/tableApi/tables/getSingleTable/${id}`
    );
  }, [id]);

  useEffect(() => {
    if (singleTable && singleTable.restaurantID !== "") {
      fetchSingleRestaurant(
        `http://localhost:3005/restaurantApi/restaurants/getSingleRestaurant/${singleTable["restaurantID"]}`
      );
    }
  }, [fetchSingleTable]);
  if (loading || singleTableError || !singleRestaurant) {
    return <Loading />;
  } else {
    const { tableNo, reservationStatus, capacity } = singleTable;
    const { name } = singleRestaurant;
    return (
      <Wrapper>
        <section className="section room-section">
          <Link to="/managetables" className="btn btn-primary">
            Back
          </Link>
          <h2 className="section-title">{tableNo}</h2>
          <div className="room">
            <div className="room-info">
              <p>
                <span className="room-data">restaurant :</span>
                {name}
              </p>
              <p>
                <span className="room-data">capacity :</span>
                {capacity}
              </p>
              <p>
                <span className="room-data">status :</span>
                {reservationStatus ? "Available" : "Un - Available"}
              </p>
            </div>
          </div>
        </section>
      </Wrapper>
    );
  }
};

const Wrapper = styled.div`
  .room-section {
    text-align: center;
  }

  .section {
    padding: 5rem 0;
  }

  .section-title {
    font-size: 2rem;
    text-transform: capitalize;
    letter-spacing: 0.3rem;
    text-align: center;
    margin-bottom: 3.5rem;
    margin-top: 1rem;
  }

  .room {
    width: 85vw;
    max-width: 1170px;
    margin: 0 auto;
    text-align: left;
  }

  .room img {
    border-radius: 0.25rem;
    width: 100%;
    height: 400px;
  }

  .room p {
    font-weight: bold;
    text-transform: capitalize;
    line-height: 1.8;
  }

  .room span {
    margin-right: 0.5rem;
  }

  .room-data {
    background: #d4e6a5;
    padding: 0.25rem 0.5rem;
    border-radius: 0.25rem;
    color: #476a2e;
  }

  .room-info {
    padding-top: 2rem;
  }

  @media screen and (min-width: 992px) {
    .room {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
    }

    .room-info {
      padding-top: 0;
    }
  }

  .btn-primary {
    background: #476a2e;
    color: #fff;
    border-color: transparent;
  }

  .btn-primary:hover {
    background: #d4e6a5;
    color: #476a2e;
  }
  .btn,
  .btn-white,
  .btn-primary {
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    color: #476a2e;
    border: 2px solid #476a2e;
    padding: 0.45rem 0.8rem;
    display: inline-block;
    transition: all 0.3s linear;
    cursor: pointer;
    font-size: 0.8rem;
    background: transparent;
    border-radius: 0.25rem;
    display: inline-block;
  }

  .btn:hover {
    background: #476a2e;
    color: #fff;
  }
`;

export default SingleTable;
