import {
  GET_DISH_BEGIN,
  GET_DISH_SUCCESS,
  GET_DISH_ERROR,
  GET_SINGLE_DISH_BEGIN,
  GET_SINGLE_DISH_SUCCESS,
  GET_SINGLE_DISH_ERROR,
} from "../actions";

const dish_reducer = (state, action) => {
  if (action.type === GET_DISH_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_DISH_SUCCESS) {
    const featured = action.payload.slice(0, 3);
    return { ...state, isLoading: false, dishes: action.payload, featured };
  }
  if (action.type === GET_DISH_ERROR) {
    return { ...state, isError: true, isLoading: false };
  }
  if (action.type === GET_SINGLE_DISH_BEGIN) {
    return { ...state, singleDishLoading: true };
  }
  if (action.type === GET_SINGLE_DISH_SUCCESS) {
    return {
      ...state,
      singleDish: action.payload,
      singleDishLoading: false,
    };
  }
  if (action.type === "SETMODE") {
    return { ...state, setMode: action.payload };
  }
  if (action.type === GET_SINGLE_DISH_ERROR) {
    return { ...state, singleDishError: true, singleDishLoading: false };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default dish_reducer;
