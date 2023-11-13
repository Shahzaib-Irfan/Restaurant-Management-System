import { React, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEmployeesContext } from "../../../contexts/EmployeeContext";
import Loading from "../../../constants/Loading";
const Employee = ({
  _id,
  firstName,
  lastName,
  contact,
  hireDate,
  position,
}) => {
  const { setMode } = useEmployeesContext();
  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:3005/employeeApi/employees/deleteEmployee/${_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response as needed
    } catch (error) {
      console.error("Error updating dish:", error);
    }
  };

  return (
    <>
      <RoomWrapper>
        <div className="room-box">
          <div className="room-box-footer">
            <p style={{ color: "green" }}>{firstName}</p>
            <p style={{ color: "green" }}>{lastName}</p>
          </div>
          <div>
            <p style={{ color: "blue" }}>{contact}</p>
          </div>
          <div className="room-box-footer">
            <p style={{ color: "grey" }}>{hireDate}</p>
            <p style={{ color: "grey" }}>{position}</p>
          </div>
          <div>
            {setMode === "Update" ? (
              <Link
                to={`/manageemployees/updateemployee/${_id}`}
                className="btn"
              >
                Update
              </Link>
            ) : setMode === "Delete" ? (
              <form onSubmit={(e) => handleDelete(e)}>
                <button type="submit" className="btn">
                  Delete
                </button>
              </form>
            ) : null}
          </div>
        </div>
      </RoomWrapper>
    </>
  );
};

const RoomWrapper = styled.div`
  .room-box {
    width: 100%;
    margin: 6px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .room-box img {
    height: 70%;
    width: 100%;
    object-fit: cover;
    border-radius: 5px 5px 0 0;
  }

  .room-box-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    gap: 2;
  }
  .btn {
    font-size: 1rem;
    padding: 0.25rem 0.5rem;
  }
  @media (max-width: 768px) {
    .room-box {
      width: 100%;
    }
  }
`;
export default Employee;
