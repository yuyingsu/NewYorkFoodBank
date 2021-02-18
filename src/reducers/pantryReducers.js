import {
    PANTRY_REGISTER_REQUEST,
    PANTRY_REGISTER_SUCCESS,
    PANTRY_REGISTER_FAIL,
    LIST_PANTRY_REQUEST,
    LIST_PANTRY_SUCCESS,
    LIST_PANTRY_FAIL,
  } from "../constants/pantryConstants";

  function pantryRegisterReducer(state = {}, action) {
    switch (action.type) {
      case PANTRY_REGISTER_REQUEST:
        return { loading: true };
      case PANTRY_REGISTER_SUCCESS:
        return { loading: false, pantyInfo: action.payload };
      case PANTRY_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

  function pantryListReducer(state = { loading: true }, action) {
    switch (action.type) {
      case LIST_PANTRY_REQUEST:
        return { loading: true };
      case LIST_PANTRY_SUCCESS:
        return { loading: false, pantries: action.payload };
      case LIST_PANTRY_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

  export {
    pantryRegisterReducer, pantryListReducer
  }
