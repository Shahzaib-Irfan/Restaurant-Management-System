import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/user_reducer";
import { useNavigate } from "react-router-dom";
import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_SINGLE_USER_BEGIN,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
} from "../actions";

const initialState = {
  users: [],
  token: "",
  message: "",
  redirect: "",
  isLoading: false,
  isError: false,
  currentUser: {},
  currentUserError: false,
  currentUserLoading: false,
};

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const loginWithAuthentication = async (username, password) => {
    dispatch({ type: GET_SINGLE_USER_BEGIN });
    try {
      const response = await axios.post("http://localhost:3005/userApi/login", {
        username,
        password,
      });
      const { token, user, redirect } = response.data;
      dispatch({
        type: GET_SINGLE_USER_SUCCESS,
        payload: { token, user, redirect },
      });
      //window.location.href = redirect;
    } catch (error) {
      dispatch({
        type: GET_SINGLE_USER_ERROR,
      });
    }
  };
  const logout = async () => {
    dispatch({
      type: GET_SINGLE_USER_SUCCESS,
      payload: { user: {}, token: "" },
    });
  };
  return (
    <UserContext.Provider value={{ ...state, loginWithAuthentication, logout }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
