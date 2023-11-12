import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/restaurant_reducer";
//import { products_url as url } from "../utils/constants";
import {
  GET_TABLE_BEGIN,
  GET_TABLE_SUCCESS,
  GET_TABLE_ERROR,
  GET_SINGLE_TABLE_BEGIN,
  GET_SINGLE_TABLE_SUCCESS,
  GET_SINGLE_TABLE_ERROR,
} from "../actions";

const initialState = {
  isSideBarOpen: false,
  tables: [],
  featured: [],
  isLoading: false,
  setMode: "none",
  isError: false,
  singleTable: {},
  singleTableError: false,
  singleTableLoading: false,
};
const TablesContext = React.createContext();

export const TablesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetModeUpdate = (value) => {
    dispatch({ type: "SETMODE", payload: value });
  };
  const fetchTables = async () => {
    dispatch({ type: GET_TABLE_BEGIN });
    try {
      const response = await axios.get(
        "http://localhost:3005/restaurantApi/restaurants/getRestaurants"
      );
      const data = await response.data;
      dispatch({ type: GET_TABLE_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_TABLE_ERROR });
    }
  };
  useEffect(() => {
    fetchTables();
  }, []);
  const fetchSingleTable = async (url) => {
    dispatch({ type: GET_SINGLE_TABLE_BEGIN });
    try {
      const response = await axios.get(url);
      const data = await response.data;
      console.log(data);
      dispatch({ type: GET_SINGLE_TABLE_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_SINGLE_TABLE_ERROR });
    }
  };
  return (
    <TablesContext.Provider
      value={{
        ...state,
        fetchSingleTable,
        fetchTables,
        handleSetModeUpdate,
      }}
    >
      {children}
    </TablesContext.Provider>
  );
};
// make sure use
export const useTablesContext = () => {
  return useContext(TablesContext);
};
