<<<<<<< Updated upstream
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_LOGOUT_SUCCESS, USER_LOGOUT_REQUEST, USER_LOGOUT_FAIL } from "../constants/userConstants";
=======
import {
  LIST_DONATE_REQUEST,
  LIST_DONATE_SUCCESS,
  LIST_DONATE_FAIL,
  USER_DONATE_REQUEST,
  USER_DONATE_SUCCESS,
  USER_DONATE_FAIL,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
} from "../constants/userConstants";
>>>>>>> Stashed changes

function listDonateReducer(state = {}, action) {
  switch (action.type) {
    case LIST_DONATE_REQUEST:
      return { loading: true };
    case LIST_DONATE_SUCCESS:
      const sucess = action.payload.filter(elem=>elem.status=="complete")
      return { loading: false, payload:sucess };
    case LIST_DONATE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function userDonateReducer(state = {}, action) {
  switch (action.type) {
    case USER_DONATE_REQUEST:
      return { loading: true };
    case USER_DONATE_SUCCESS:
      return { loading: false };
    case USER_DONATE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

<<<<<<< Updated upstream
export {
  userSigninReducer, userRegisterReducer
=======
function userRegisterReducer(state = {}, action) {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function userSigninReducer(state = {}, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT_REQUEST:
        return { loading: true };
    case USER_LOGOUT_SUCCESS:
        return { };
    case USER_LOGOUT_FAIL:
        return { loading: false, error: action.payload };
    default: return state;
  }
}

export {
  listDonateReducer,
  userDonateReducer,
  userRegisterReducer,
  userSigninReducer
>>>>>>> Stashed changes
}
