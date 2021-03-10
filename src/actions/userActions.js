import Axios from "axios";
import Cookie from 'js-cookie';
import {
  LIST_DONATE_REQUEST,
  LIST_DONATE_SUCCESS,
  LIST_DONATE_FAIL,
  USER_DONATE_REQUEST,
  USER_DONATE_SUCCESS,
  USER_DONATE_FAIL,
  USER_LOGOUT_REQUEST,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
} from "../constants/userConstants";

const donate = (amount) => async (dispatch, getState) => {
  const { userSignin: { userInfo } } = getState();
  const user_id = userInfo.user_id;
  dispatch({ type: USER_DONATE_REQUEST });
  try {
    await Axios.post("https://nyfoodbank.herokuapp.com/pay/"+user_id, { amount },  {
      headers: {
      'Content-Type': 'application/json'
      }}
      );
    dispatch({ type: USER_DONATE_SUCCESS });
  } catch (error) {
    console.log(error.response);
    dispatch({ type: USER_DONATE_FAIL, payload: error.message });
  }
}

const listDonation = () => async (dispatch) => {
  dispatch({ type: LIST_DONATE_REQUEST });
  try {
    const { data } = await Axios.get("https://nyfoodbank.herokuapp.com/pay", { });
    dispatch({ type: LIST_DONATE_SUCCESS, payload:data });
  } catch (error) {
    dispatch({ type: LIST_DONATE_FAIL, payload: error.message });
  }
}

const logout = () => async (dispatch, getState) => {
  const { userSignin: { userInfo } } = getState();
  Cookie.remove("userInfo");
  dispatch({ type: USER_LOGOUT_REQUEST });
  try {
    await Axios.post("https://nyfoodbank.herokuapp.com/logout", {}, {
        headers: {
          "Authorization": ' Bearer ' + userInfo.access_token
        }
      });
    dispatch({ type: USER_LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: USER_LOGOUT_FAIL, payload: error.message });
  }
}

const register = (username, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { username, email, password } });
  try {
    const { data } = await Axios.post("https://nyfoodbank.herokuapp.com/register", { username, email, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}

const signin = (username, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });
  try {
    const { data } = await Axios.post("https://nyfoodbank.herokuapp.com/login", { username, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

export {
  donate,
  listDonation,
  logout,
  register,
  signin
};
