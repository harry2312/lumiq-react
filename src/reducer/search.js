import {
  SEARCH_ERROR,
  SEARCH_SUCCESS,
  SEARCH_PENDING,
  CLEAR_MESSAGE,
} from "../actions/actionTypes";

const initialState = {
  loading: false,
  message: "",
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_SUCCESS:
      return { ...state, message: action.payload, loading: false };
    case SEARCH_ERROR:
      return { ...state, message: action.payload, loading: false };
    case SEARCH_PENDING:
      return { ...state, loading: true };
    case CLEAR_MESSAGE:
      return { ...state, message: "" };
    default:
      return state;
  }
};

export default search;
