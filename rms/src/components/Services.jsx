import React from "react";
import styled from "styled-components";

const Services = () => {
  return (
    <Wrapper>
      <section className="cards-info">
        <div className="info">
          <h2>
            Beautiful Food <br />
            Made Only For You
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <h3>Mission</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
          <div className="card">
            <h3>Vision</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
          <div className="card">
            <h3>History</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </p>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .cards-info {
    width: 100%;
    height: auto;
    background-color: #f1dbce;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .info {
    display: flex;
    flex-direction: row;
    padding: 20px;
    align-items: center;
    justify-content: space-between;
    font-family: "Kanit", sans-serif;
  }

  .info h2 {
    text-shadow: 0 5px 5px;
  }

  .info p {
    margin-left: 20px; /* Adjust this value as needed */
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
  }

  .cards {
    display: flex;
    width: inherit;
    flex-direction: row;
    padding: 50px;
    flex: wrap;
    gap: 2rem;
    align-items: center;
    justify-content: space-between;
  }

  .card {
    display: flex;
    width: 30%;
    height: auto;
    flex-direction: column;
    padding: 30px;
    align-items: center;
    justify-content: space-between;
    background-color: #d69582;
  }

  @media (max-width: 992px) {
    .info {
      flex-direction: column;
      margin: auto;
    }
    .info p {
      margin: auto;
    }

    .card {
      width: 50%;
    }
  }

  @media (max-width: 768px) {
    .card {
      width: 80%;
    }

    .cards {
      flex-direction: column;
    }
  }
`;

export default Services;
