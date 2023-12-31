import { React, useState, useEffect } from "react";
import Image1 from "../../../assets/pexels-erica-zhao-2670273.jpg";
import { useParams } from "react-router-dom";
import Image2 from "../../../assets/smallImage.jpg";
import styled from "styled-components";
import { useRestaurantsContext } from "../../../contexts/RestaurantContext";
import { useTablesContext } from "../../../contexts/TableContext";
import Loading from "../../../constants/Loading";

const UpdateTable = () => {
  const { id } = useParams();
  const { loading, singleTable, fetchSingleTable, singleTableError } =
    useTablesContext();
  const { restaurants, fetchRestaurants } = useRestaurantsContext();
  const [formData, setFormData] = useState({
    tableNo: "",
    restaurantID: "",
    capacity: 0,
  });

  useEffect(() => {
    fetchRestaurants();
  }, []);

  useEffect(() => {
    fetchSingleTable(
      `http://localhost:3005/tableApi/tables/getSingleTable/${id}`
    );
  }, []);

  useEffect(() => {
    if (singleTable) {
      setFormData({
        tableNo: singleTable["tableNo"],
        restaurantID: singleTable["restaurantID"],
        capacity: singleTable["capacity"],
      });
    }
  }, [fetchSingleTable]);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(formData);
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataForSubmit = new FormData();

      for (const key in formData) {
        formDataForSubmit.append(key, formData[key]);
      }

      const response = await fetch("http://localhost:3005/tableApi/tables", {
        method: "POST",
        body: formDataForSubmit,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (loading || singleTableError) {
    return <Loading />;
  } else {
    return (
      <>
        <AddRoomContainer>
          <article className="img-container">
            <img src={Image1} alt="" className="main-img" />
            <img src={Image2} alt="" className="accent-img" />
          </article>
          <article className="form-article">
            <form
              action={`http://localhost:3005/tableApi/tables/updateTable/${id}`}
              method="post"
            >
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="tableNo"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Table No"
                  onChange={handleInputChange}
                />
                <label for="floatingInput">{formData.tableNo}</label>
              </div>
              <div class="form-floating">
                <select
                  className="form-select form-select-sm"
                  aria-label=".form-select-sm example"
                  name="restaurantID"
                  onChange={handleInputChange}
                  value={formData.restaurantID}
                >
                  <option value="" disabled>
                    Select Restaurant
                  </option>
                  {restaurants &&
                    restaurants.map((restaurant, index) => (
                      <option key={index} value={restaurant._id}>
                        {restaurant.name}
                      </option>
                    ))}
                </select>

                <label for="floatingInput">Choose Restaurant</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="capacity"
                  class="form-control"
                  id="InputIngredients"
                  placeholder="Sitting Capacity"
                  onChange={handleInputChange}
                />
                <label for="InputIngredients">{formData.capacity}</label>
              </div>
              <button className="cool-button" type="submit">
                Add Table
              </button>
            </form>
          </article>
        </AddRoomContainer>
      </>
    );
  }
};

const AddRoomContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;

  .img-container {
    width: 50%;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
  }

  .main-img {
    width: 100%;
    height: 550px;
    object-fit: cover;
    border-radius: 10px;
  }

  .accent-img {
    position: absolute;
    bottom: 0;
    right: -25px;
    width: 250px;
    border-radius: 10px;
  }

  .form-article {
    flex: 1;
    padding: 3rem;
    max-width: 500px;
  }

  .form-floating {
    margin-bottom: 1.5rem;
  }

  .form-control {
    width: 100%;
    padding: 1rem;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  label {
    font-size: 16px;
  }

  /* Base styles for the cool submit button */
  .cool-button {
    display: inline-block;
    padding: 12px 24px;
    background-color: #4caf50; /* Green background color */
    color: #fff; /* Text color */
    border: none;
    border-radius: 30px;
    font-size: 16px;
    cursor: pointer;
    outline: none;
    transition: background-color 0.3s ease;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }

  /* Gradient background effect */
  .cool-button {
    background-image: linear-gradient(to right, #4caf50, #63a69f);
  }

  /* Hover effect */
  .cool-button:hover {
    background-image: linear-gradient(to right, #63a69f, #4caf50);
  }

  /* Optional: Add a box-shadow on hover for an additional effect */
  .cool-button:hover {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 992px) {
    flex-direction: column;

    .img-container {
      width: 100%;
      max-height: 400px;
    }

    .main-img {
      height: 100%;
    }

    .accent-img {
      display: none;
    }

    .form-article {
      padding: 2rem;
    }
  }
`;

export default UpdateTable;
