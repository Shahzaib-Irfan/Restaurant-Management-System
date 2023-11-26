import {
  GET_USER_DISH_BEGIN,
  GET_USER_DISH_SUCCESS,
  GET_USER_DISH_ERROR,
  GET_SINGLE_USER_DISH_BEGIN,
  GET_SINGLE_USER_DISH_SUCCESS,
  GET_SINGLE_USER_DISH_ERROR,
} from "../actions";

const userDish_reducer = (state, action) => {
  if (action.type === GET_USER_DISH_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_USER_DISH_SUCCESS) {
    return { ...state, isLoading: false, userDishes: action.payload };
  }
  if (action.type === GET_USER_DISH_ERROR) {
    return { ...state, isError: true, isLoading: false };
  }
  if (action.type === GET_SINGLE_USER_DISH_BEGIN) {
    return { ...state, singleUserDishLoading: true };
  }
  if (action.type === GET_SINGLE_USER_DISH_SUCCESS) {
    return {
      ...state,
      singleUserDish: action.payload,
      singleUserDishLoading: false,
    };
  }
  if (action.type === GET_SINGLE_USER_DISH_ERROR) {
    return {
      ...state,
      singleUserDishError: true,
      singleUserDishLoading: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default userDish_reducer;
