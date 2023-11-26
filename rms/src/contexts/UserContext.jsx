import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/user_reducer";
import { useNavigate } from "react-router-dom";
import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  GET_CURRENT_USER_ERROR,
  GET_SINGLE_USER_BEGIN,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
  GET_SINGLE_USER_ORDERS_BEGIN,
  GET_SINGLE_USER_ORDERS_SUCCESS,
  GET_SINGLE_USER_ORDERS_ERROR,
  GET_USER_ORDERS_BEGIN,
  GET_USER_ORDERS_SUCCESS,
  GET_USER_ORDERS_ERROR,
  GET_SINGLE_ORDER_BEGIN,
  GET_SINGLE_ORDER_SUCCESS,
  GET_SINGLE_ORDER_ERROR,
} from "../actions";

const getUserFromMemory = (el) => {
  let user = localStorage.getItem("user");
  if (user) {
    user = JSON.parse(user);
    return user[el];
  } else if (el === "token") {
    return "";
  } else {
    return {};
  }
};

const initialState = {
  users: [],
  orders: [],
  token: getUserFromMemory("token"),
  message: "",
  redirect: "",
  isLoading: false,
  isError: false,
  isOrdersLoading: false,
  userOrdersError: false,
  singleUser: {},
  singleUserLoading: false,
  singleUserError: false,
  currentUser: getUserFromMemory("currentUser"),
  singleUserOrders: [],
  singleOrder: {},
  singleOrderLoading: false,
  singleOrderError: false,
  currentUserError: false,
  currentUserLoading: false,
  singleUserOrdersError: false,
  singleUserOrdersLoading: false,
};

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const loginWithAuthentication = async (username, password) => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const response = await axios.post("http://localhost:3005/userApi/login", {
        username,
        password,
      });
      const { token, user, redirect } = response.data;
      dispatch({
        type: GET_CURRENT_USER_SUCCESS,
        payload: { token, user, redirect },
      });
      window.location.href = redirect;
    } catch (error) {
      dispatch({
        type: GET_CURRENT_USER_ERROR,
      });
    }
  };
  const logout = async () => {
    dispatch({
      type: GET_SINGLE_USER_SUCCESS,
      payload: { user: {}, token: "" },
    });
    window.location.href = "/login";
  };

  const fetchSingleUser = async (url) => {
    dispatch({ type: GET_SINGLE_USER_BEGIN });
    try {
      const response = await axios.get(url);
      const data = await response.data;
      dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_SINGLE_USER_ERROR });
    }
  };

  const fetchSingleUserOrders = async (url) => {
    dispatch({ type: GET_SINGLE_USER_ORDERS_BEGIN });
    try {
      const response = await axios.get(url);
      const data = await response.data;
      dispatch({ type: GET_SINGLE_USER_ORDERS_SUCCESS, payload: data });
    } catch (error) {
      console.log(error);
      dispatch({ type: GET_SINGLE_USER_ORDERS_ERROR });
    }
  };

  const fetchUserOrders = async () => {
    dispatch({ type: GET_USER_ORDERS_BEGIN });
    try {
      const response = await axios.get(
        "http://localhost:3005/orderApi/orders/getOrders"
      );
      const data = await response.data;
      dispatch({ type: GET_USER_ORDERS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_USER_ORDERS_ERROR });
    }
  };

  const fetchSingleOrder = async (url) => {
    dispatch({ type: GET_SINGLE_ORDER_BEGIN });
    try {
      const response = await axios.get(url);
      const data = await response.data;
      dispatch({ type: GET_SINGLE_ORDER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: GET_SINGLE_ORDER_ERROR });
    }
  };
  return (
    <UserContext.Provider
      value={{
        ...state,
        loginWithAuthentication,
        logout,
        fetchSingleUserOrders,
        fetchUserOrders,
        fetchSingleOrder,
        fetchSingleUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
