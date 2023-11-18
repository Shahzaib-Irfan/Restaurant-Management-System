import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/user_reducer";
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
    console.log(username, password);
    dispatch({ type: GET_SINGLE_USER_BEGIN });
    try {
      const response = await axios.post("http://localhost:3005/userApi/login", {
        username,
        password,
      });
      const { token, user } = response.data;
      dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: { token, user } });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_USER_ERROR,
      });
    }
  };
  return (
    <UserContext.Provider value={{ ...state, loginWithAuthentication }}>
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
