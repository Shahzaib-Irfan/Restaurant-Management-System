import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/employee_reducer";
//import { products_url as url } from "../utils/constants";
import {
  GET_EMPLOYEE_BEGIN,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_ERROR,
  GET_SINGLE_EMPLOYEE_BEGIN,
  GET_SINGLE_EMPLOYEE_SUCCESS,
  GET_SINGLE_EMPLOYEE_ERROR,
} from "../actions";

const initialState = {
  isSideBarOpen: false,
  employees: [],
  featured: [],
  isLoading: false,
  setMode: "none",
  isError: false,
  singleEmployee: {},
  singleEmployeeError: false,
  singleEmployeeLoading: false,
};
const EmployeesContext = React.createContext();

export const EmployeesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetModeUpdate = (value) => {
    dispatch({ type: "SETMODE", payload: value });
  };
  const fetchEmployees = async () => {
    dispatch({ type: GET_EMPLOYEE_BEGIN });
    try {
      const response = await axios.get(
        "http://localhost:3005/employeeApi/employees/getEmployees"
      );
      const data = await response.data;
      dispatch({ type: GET_EMPLOYEE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_EMPLOYEE_ERROR });
    }
  };
  useEffect(() => {
    fetchEmployees();
  }, []);
  const fetchSingleEmployee = async (url) => {
    dispatch({ type: GET_SINGLE_EMPLOYEE_BEGIN });
    try {
      const response = await axios.get(url);
      const data = await response.data;
      console.log(data);
      dispatch({ type: GET_SINGLE_EMPLOYEE_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_SINGLE_EMPLOYEE_ERROR });
    }
  };
  return (
    <EmployeesContext.Provider
      value={{
        ...state,
        fetchSingleEmployee,
        fetchEmployees,
        handleSetModeUpdate,
      }}
    >
      {children}
    </EmployeesContext.Provider>
  );
};
// make sure use
export const useEmployeesContext = () => {
  return useContext(EmployeesContext);
};
