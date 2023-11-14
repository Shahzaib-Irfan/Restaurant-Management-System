import { React, useState, useEffect } from "react";
import Image1 from "../../../assets/pexels-erica-zhao-2670273.jpg";
import Image2 from "../../../assets/smallImage.jpg";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEmployeesContext } from "../../../contexts/EmployeeContext";
import Loading from "../../../constants/Loading";

const UpdateEmployee = () => {
  const { id } = useParams();
  const {
    loading,
    singleEmployee,
    fetchSingleEmployee,
    singleEmployeeError,
    singleEmployeeLoading,
  } = useEmployeesContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    hireDate: null,
    position: "",
  });

  useEffect(() => {
    fetchSingleEmployee(
      `http://localhost:3005/employeeApi/employees/getSingleEmployee/${id}`
    );
  }, [id]);

  useEffect(() => {
    if (singleEmployee) {
      singleEmployee.hireDate &&
        setFormData({
          firstName: singleEmployee["firstName"],
          lastName: singleEmployee["lastName"],
          contact: singleEmployee["contact"],
          hireDate: singleEmployee["hireDate"].slice(0, 10),
          position: singleEmployee["position"],
        });
    }
  }, [fetchSingleEmployee]);
  useEffect(() => {
    console.log(singleEmployee);
  }, [singleEmployee]);
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

      const response = await fetch(
        `http://localhost:3005/employeeApi/employees/updateEmployee/${id}`,
        {
          method: "POST",
          body: formDataForSubmit,
        }
      );

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  if (!formData || singleEmployeeLoading || singleEmployeeError) {
    return <Loading />;
  } else if (singleEmployee) {
    return (
      <>
        <AddRoomContainer>
          <article className="img-container">
            <img src={Image1} alt="" className="main-img" />
            <img src={Image2} alt="" className="accent-img" />
          </article>
          <article className="form-article">
            <form
              action={`http://localhost:3005/employeeApi/employees/updateEmployee/${id}`}
              method="post"
            >
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="firstName"
                  class="form-control"
                  id="floatingInput"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <label for="floatingInput">{formData.firstName}</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="lastName"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
                <label for="floatingInput">{formData.lastName}</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="contact"
                  class="form-control"
                  id="InputIngredients"
                  placeholder="Contact Information"
                  value={formData.contact}
                  onChange={handleInputChange}
                />
                <label for="InputIngredients">{formData.contact}</label>
              </div>
              {formData.hireDate ? (
                <div class="form-floating mb-3">
                  <input
                    type="date"
                    name="hireDate"
                    class="form-control"
                    id="InputIngredients"
                    placeholder="Hire Date"
                    value={formData.hireDate}
                    onChange={handleInputChange}
                  />
                  <label for="InputIngredients">
                    {formData.hireDate.slice(0, 10)}
                  </label>
                </div>
              ) : (
                <div class="form-floating mb-3">
                  <input
                    type="date"
                    name="hireDate"
                    class="form-control"
                    id="InputIngredients"
                    placeholder="Hire Date"
                    value={formData.hireDate}
                    onChange={handleInputChange}
                  />
                  <label for="InputIngredients">{formData.hireDate}</label>
                </div>
              )}

              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="position"
                  class="form-control"
                  id="InputIngredients"
                  placeholder="Position"
                  value={formData.position}
                  onChange={handleInputChange}
                />
                <label for="InputIngredients">{formData.position}</label>
              </div>
              <button className="cool-button" type="submit">
                Update Employee
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

export default UpdateEmployee;
