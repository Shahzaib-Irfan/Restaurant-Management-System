import { React, useState } from "react";
import Image1 from "../../../assets/pexels-erica-zhao-2670273.jpg";
import Image2 from "../../../assets/smallImage.jpg";
import styled from "styled-components";

const AddRestaurant = () => {
  const [formData, setFormData] = useState({
    restaurantName: "",
    address: "",
    contactInformation: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file || !file.type.startsWith("image")) {
      return alert("Please upload an image!");
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        image: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formDataForSubmit = new FormData();

      // Append each property to the FormData object
      for (const key in formData) {
        formDataForSubmit.append(key, formData[key]);
      }

      const response = await fetch("http://localhost:3005/dishApi/dishes", {
        method: "POST",
        body: formDataForSubmit,
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };
  return (
    <>
      <AddRoomContainer>
        <article className="img-container">
          <img src={Image1} alt="" className="main-img" />
          <img src={Image2} alt="" className="accent-img" />
        </article>
        <article className="form-article">
          <form
            action="http://localhost:3005/restaurantApi/restaurants"
            method="post"
            encType="multipart/form-data"
          >
            <div class="form-floating mb-3">
              <input
                type="text"
                name="restaurantName"
                class="form-control"
                id="floatingInput"
                placeholder="Restaurant Name"
                onChange={handleInputChange}
              />
              <label for="floatingInput">Restaurant Name.</label>
            </div>
            <div class="form-floating">
              <textarea
                class="form-control"
                name="address"
                id="floatingArea"
                placeholder="Restaurant Address"
                onChange={handleInputChange}
                rows={20}
              />
              <label for="floatingArea">Address</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                name="contactInformation"
                class="form-control"
                id="InputIngredients"
                placeholder="Contact Information"
                onChange={handleInputChange}
              />
              <label for="InputIngredients">Contact Information</label>
            </div>
            <div style={{ marginTop: "10px" }}>
              <input
                type="file"
                id="imageUpload"
                name="image"
                onChange={handleFileChange}
              />
            </div>
            <button className="cool-button" type="submit">
              Add Dish
            </button>
          </form>
        </article>
      </AddRoomContainer>
    </>
  );
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

export default AddRestaurant;
