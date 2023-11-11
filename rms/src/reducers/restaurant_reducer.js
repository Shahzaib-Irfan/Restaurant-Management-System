import {
  GET_RESTAURANT_BEGIN,
  GET_RESTAURANT_SUCCESS,
  GET_RESTAURANT_ERROR,
  GET_SINGLE_RESTAURANT_BEGIN,
  GET_SINGLE_RESTAURANT_SUCCESS,
  GET_SINGLE_RESTAURANT_ERROR,
} from "../actions";

const restaurant_reducer = (state, action) => {
  if (action.type === GET_RESTAURANT_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_RESTAURANT_SUCCESS) {
    const featured = action.payload;
    return {
      ...state,
      isLoading: false,
      restaurants: action.payload,
      featured,
    };
  }
  if (action.type === GET_RESTAURANT_ERROR) {
    return { ...state, isError: true, isLoading: false };
  }
  if (action.type === GET_SINGLE_RESTAURANT_BEGIN) {
    return { ...state, singleRestaurantLoading: true };
  }
  if (action.type === GET_SINGLE_RESTAURANT_SUCCESS) {
    return {
      ...state,
      singleRestaurant: action.payload,
      singleRestaurantLoading: false,
    };
  }
  if (action.type === "SETMODE") {
    return { ...state, setMode: action.payload };
  }
  if (action.type === GET_SINGLE_RESTAURANT_ERROR) {
    return {
      ...state,
      singleRestaurantError: true,
      singleRestaurantLoading: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default restaurant_reducer;
