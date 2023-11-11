import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/restaurant_reducer";
//import { products_url as url } from "../utils/constants";
import {
  GET_RESTAURANT_BEGIN,
  GET_RESTAURANT_SUCCESS,
  GET_RESTAURANT_ERROR,
  GET_SINGLE_RESTAURANT_BEGIN,
  GET_SINGLE_RESTAURANT_SUCCESS,
  GET_SINGLE_RESTAURANT_ERROR,
} from "../actions";

const initialState = {
  isSideBarOpen: false,
  restaurants: [],
  featured: [],
  isLoading: false,
  setMode: "none",
  isError: false,
  singleRestaurant: {},
  singleRestaurantError: false,
  singleRestaurantLoading: false,
};
const RestaurantsContext = React.createContext();

export const RestaurantsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetModeUpdate = (value) => {
    dispatch({ type: "SETMODE", payload: value });
  };
  const fetchRestaurants = async () => {
    dispatch({ type: GET_RESTAURANT_BEGIN });
    try {
      const response = await axios.get(
        "http://localhost:3005/restaurantApi/restaurants/getRestaurants"
      );
      const data = await response.data;
      dispatch({ type: GET_RESTAURANT_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_RESTAURANT_ERROR });
    }
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);
  const fetchSingleRestaurant = async (url) => {
    dispatch({ type: GET_SINGLE_RESTAURANT_BEGIN });
    try {
      const response = await axios.get(url);
      const data = await response.data;
      console.log(data);
      dispatch({ type: GET_SINGLE_RESTAURANT_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_SINGLE_RESTAURANT_ERROR });
    }
  };
  return (
    <RestaurantsContext.Provider
      value={{
        ...state,
        fetchSingleRestaurant,
        fetchRestaurants,
        handleSetModeUpdate,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
// make sure use
export const useRestaurantsContext = () => {
  return useContext(RestaurantsContext);
};
