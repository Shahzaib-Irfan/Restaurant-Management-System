import {
  GET_EMPLOYEE_BEGIN,
  GET_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_ERROR,
  GET_SINGLE_EMPLOYEE_BEGIN,
  GET_SINGLE_EMPLOYEE_SUCCESS,
  GET_SINGLE_EMPLOYEE_ERROR,
} from "../actions";

const table_reducer = (state, action) => {
  if (action.type === GET_EMPLOYEE_BEGIN) {
    return { ...state, isLoading: true };
  }
  if (action.type === GET_EMPLOYEE_SUCCESS) {
    const featured = action.payload;
    return {
      ...state,
      isLoading: false,
      employees: action.payload,
      featured,
    };
  }
  if (action.type === GET_EMPLOYEE_ERROR) {
    return { ...state, isError: true, isLoading: false };
  }
  if (action.type === GET_SINGLE_EMPLOYEE_BEGIN) {
    return { ...state, singleEmployeeLoading: true };
  }
  if (action.type === GET_SINGLE_EMPLOYEE_SUCCESS) {
    return {
      ...state,
      singleEmployee: action.payload,
      singleEmployeeLoading: false,
    };
  }
  if (action.type === "SETMODE") {
    return { ...state, setMode: action.payload };
  }
  if (action.type === GET_SINGLE_EMPLOYEE_ERROR) {
    return {
      ...state,
      singleEmployeeError: true,
      singleEmployeeLoading: false,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default table_reducer;
