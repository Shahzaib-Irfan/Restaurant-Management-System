import {
  GET_TABLE_BEGIN,
  GET_TABLE_SUCCESS,
  GET_TABLE_ERROR,
  GET_SINGLE_TABLE_BEGIN,
  GET_SINGLE_TABLE_SUCCESS,
  GET_SINGLE_TABLE_ERROR,
} from "../actions";

const table_reducer = (state, action) => {
  if (action.type === GET_TABLE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_TABLE_SUCCESS) {
    const featured = action.payload;
    return {
      ...state,
      isLoading: false,
      tables: action.payload,
      featured,
    };
  }
  if (action.type === GET_TABLE_ERROR) {
    return { ...state, isError: true, isLoading: false };
  }
  if (action.type === GET_SINGLE_TABLE_BEGIN) {
    return { ...state, singleTableLoading: true };
  }
  if (action.type === GET_SINGLE_TABLE_SUCCESS) {
    return {
      ...state,
      singleTable: action.payload,
      singleTableLoading: false,
    };
  }
  if (action.type === "SETMODE") {
    return { ...state, setMode: action.payload };
  }
  if (action.type === GET_SINGLE_TABLE_ERROR) {
    return {
      ...state,
      singleTableError: true,
      singleTableLoading: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default table_reducer;
