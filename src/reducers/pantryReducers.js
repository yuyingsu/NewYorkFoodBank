import {
    PANTRY_REGISTER_REQUEST,
    PANTRY_REGISTER_SUCCESS,
    PANTRY_REGISTER_FAIL,
    LIST_PANTRY_REQUEST,
    LIST_PANTRY_SUCCESS,
    LIST_PANTRY_FAIL,
    MY_PANTRY_LIST_REQUEST,
    MY_PANTRY_LIST_SUCCESS,
    MY_PANTRY_LIST_FAIL,
    SINGLE_PANTRY_LIST_REQUEST,
    SINGLE_PANTRY_LIST_SUCCESS,
    SINGLE_PANTRY_LIST_FAIL,
    PANTRY_UPDATE_REQUEST,
    PANTRY_UPDATE_SUCCESS,
    PANTRY_UPDATE_FAIL
  } from "../constants/pantryConstants";

  function myPantryListReducer(state = {}, action) {
    switch (action.type) {
      case MY_PANTRY_LIST_REQUEST:
        return { loading: true };
      case MY_PANTRY_LIST_SUCCESS:
        return { loading: false, pantries: action.payload };
      case MY_PANTRY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

  function pantryRegisterReducer(state = {}, action) {
    switch (action.type) {
      case PANTRY_REGISTER_REQUEST:
        return { loading: true };
      case PANTRY_REGISTER_SUCCESS:
        return { loading: false, pantryInfo: action.payload };
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

  function singlePantryListReducer(state = {}, action) {
    switch (action.type) {
      case SINGLE_PANTRY_LIST_REQUEST:
        return { loading: true };
      case SINGLE_PANTRY_LIST_SUCCESS:
        return { loading: false, pantry: action.payload };
      case SINGLE_PANTRY_LIST_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

  function pantryUpdateReducer(state = {}, action) {
    switch (action.type) {
      case PANTRY_UPDATE_REQUEST:
        return { loading: true };
      case PANTRY_UPDATE_SUCCESS:
        return { loading: false, pantry: action.payload };
      case PANTRY_UPDATE_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }

  export {
    myPantryListReducer,
    pantryRegisterReducer,
    pantryListReducer,
    pantryUpdateReducer,
    singlePantryListReducer
  }
