import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/userDish_reducer";
import {
  GET_USER_DISH_BEGIN,
  GET_USER_DISH_SUCCESS,
  GET_USER_DISH_ERROR,
  GET_SINGLE_USER_DISH_BEGIN,
  GET_SINGLE_USER_DISH_SUCCESS,
  GET_SINGLE_USER_DISH_ERROR,
} from "../actions";

const initialState = {
  userDishes: [],
  isLoading: false,
  isError: false,
  singleUserDish: {},
  singleUserDishError: false,
  singleUserDishLoading: false,
};
const UserDishesContext = React.createContext();

export const UserDishesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchUserDishes = async () => {
    dispatch({ type: GET_USER_DISH_BEGIN });
    try {
      const response = await axios.get(
        "http://localhost:3005/userDishApi/userdishes/getDishes"
      );
      const data = await response.data;
      dispatch({ type: GET_USER_DISH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_USER_DISH_ERROR });
    }
  };
  useEffect(() => {
    fetchUserDishes();
  }, []);
  const fetchSingleUserDish = async (url) => {
    dispatch({ type: GET_SINGLE_USER_DISH_BEGIN });
    try {
      const response = await axios.get(url);
      const data = await response.data;
      dispatch({ type: GET_SINGLE_USER_DISH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_USER_DISH_ERROR });
    }
  };
  return (
    <UserDishesContext.Provider
      value={{
        ...state,
        fetchSingleUserDish,
        fetchUserDishes,
      }}
    >
      {children}
    </UserDishesContext.Provider>
  );
};
// make sure use
export const useUserDishesContext = () => {
  return useContext(UserDishesContext);
};
