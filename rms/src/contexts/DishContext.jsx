import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/dish_reducer";
//import { products_url as url } from "../utils/constants";
import {
  GET_DISH_BEGIN,
  GET_DISH_SUCCESS,
  GET_DISH_ERROR,
  GET_SINGLE_DISH_BEGIN,
  GET_SINGLE_DISH_SUCCESS,
  GET_SINGLE_DISH_ERROR,
} from "../actions";

const initialState = {
  isSideBarOpen: false,
  dishes: [],
  featured: [],
  isLoading: false,
  setMode: "none",
  isError: false,
  singleDish: {},
  singleDishError: false,
  singleDishLoading: false,
};
const DishesContext = React.createContext();

export const DishesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetModeUpdate = (value) => {
    dispatch({ type: "SETMODE", payload: value });
  };
  const fetchDishes = async () => {
    dispatch({ type: GET_DISH_BEGIN });
    try {
      const response = await axios.get(
        "http://localhost:3005/dishApi/dishes/getDishes"
      );
      const data = await response.data;
      dispatch({ type: GET_DISH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_DISH_ERROR });
    }
  };

  const fetchDishesByRID = async (id) => {
    dispatch({ type: GET_DISH_BEGIN });
    try {
      const response = await axios.get(
        `http://localhost:3005/dishApi/dishes/getDishesByRID/${id}`
      );
      const data = await response.data;
      dispatch({ type: GET_DISH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_DISH_ERROR });
    }
  };
  useEffect(() => {
    fetchDishes();
  }, []);
  const fetchSingleDish = async (url) => {
    dispatch({ type: GET_SINGLE_DISH_BEGIN });
    try {
      const response = await axios.get(url);
      const data = await response.data;
      dispatch({ type: GET_SINGLE_DISH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_DISH_ERROR });
    }
  };
  return (
    <DishesContext.Provider
      value={{
        ...state,
        fetchSingleDish,
        fetchDishes,
        handleSetModeUpdate,
        fetchDishesByRID,
      }}
    >
      {children}
    </DishesContext.Provider>
  );
};
// make sure use
export const useDishesContext = () => {
  return useContext(DishesContext);
};
