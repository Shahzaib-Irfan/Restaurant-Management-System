import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_SINGLE_USER_BEGIN,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_ERROR,
} from "../actions";

const user_reducer = (state, action) => {
  if (action.type === GET_USER_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_USER_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      users: action.payload,
    };
  }
  if (action.type === GET_USER_ERROR) {
    return { ...state, isError: true, isLoading: false };
  }
  if (action.type === GET_SINGLE_USER_BEGIN) {
    return { ...state, currentUserLoading: true };
  }
  if (action.type === GET_SINGLE_USER_SUCCESS) {
    return {
      ...state,
      currentUser: action.payload["user"],
      token: action.payload["token"],
      message: "",
      currentUserLoading: false,
    };
  }
  if (action.type === GET_SINGLE_USER_ERROR) {
    return {
      ...state,
      currentUserError: true,
      currentUserLoading: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default user_reducer;
