import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_USER,
  LOADING_USER,
  STOP_LOADING_USER,
  CLEAR_ERRORS,
  SET_ERRORS,
} from "../../Redux/Types";
// The intial state

const initialState = {
  authenticated: false,
  loading: false,
  credentials: false,
  errors: null,
  //This is the Document for Authenticated users
};

export default function userStates(state = initialState, { type, payload }) {
  switch (type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading:false,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        credentials:payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING_USER:
      return {
        ...state,
        loading: false,
      };
    case SET_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        loading: false,
        errors: null,
      };
    default:
      return state;
  }
}
