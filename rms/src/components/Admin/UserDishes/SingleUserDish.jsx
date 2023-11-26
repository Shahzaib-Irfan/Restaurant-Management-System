import { React, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useUserDishesContext } from "../../../contexts/UserDishContext";
import { useUserContext } from "../../../contexts/UserContext";
import Loading from "../../../constants/Loading";
import styled from "styled-components";

const SingleUserDish = () => {
  var { id } = useParams();
  const {
    singleUserDishLoading,
    singleUserDish,
    fetchSingleUserDish,
    singleUserDishError,
  } = useUserDishesContext();
  const { singleUser, fetchSingleUser, singleUserLoading, singleUserError } =
    useUserContext();
  useEffect(() => {
    fetchSingleUserDish(
      `http://localhost:3005/userdishApi/userdishes/getSingleDish/${id}`
    );
  }, [id]);
  useEffect(() => {
    if (singleUserDish && singleUserDish.userID) {
      fetchSingleUser(
        `http://localhost:3005/userApi/users/getSingleUser/${singleUserDish.userID}`
      );
    }
  }, [fetchSingleUserDish]);
  if (singleUserDishLoading || singleUserDishError || singleUserError) {
    return <Loading />;
  } else {
    const { name, image, userID, description, ingredients, price } =
      singleUserDish;
    return (
      <Wrapper>
        <section className="section room-section">
          <Link to="/manageuserdishes" className="btn btn-primary">
            Back
          </Link>
          <h2 className="section-title">{name}</h2>
          <div className="room">
            <img src={`http://localhost:3005/images/${image}`} alt={name}></img>
            <div className="room-info">
              <p>
                <span className="room-data">suggested by :</span>
                {singleUser.username}
              </p>
              <p>
                <span className="room-data">info :</span>
                {description}
              </p>
              <p>
                <span className="room-data">ingredients :</span>
                {ingredients}
              </p>
              <p>
                <span className="room-data">suggested price :</span>
                {"Rs. " + price + "/-"}
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

export default SingleUserDish;
