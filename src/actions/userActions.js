import Axios from "axios";
import Cookie from 'js-cookie';
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS, 
  USER_REGISTER_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL, 
  USER_LOGOUT_REQUEST, 
  USER_LOGOUT_SUCCESS, 
  USER_LOGOUT_FAIL
} from "../constants/userConstants";

const signin = (username, password) => async (dispatch) => {
  //console.log(email, password)
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { username, password } });
  try {
    const { data } = await Axios.post("http://127.0.0.1:5000/login", { username, password });
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    console.log(data)
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
}

const register = (username, email, password) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: { username, email, password } });
  try {
    const { data } = await Axios.post("http://127.0.0.1:5000/register", { username, email, password });
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_REGISTER_FAIL, payload: error.message });
  }
}

const logout = () => async (dispatch, getState) => {
  
  const { userSignin: { userInfo } } = getState();
  
  Cookie.remove("userInfo");

  console.log(userInfo.access_token);

  dispatch({ type: USER_LOGOUT_REQUEST });
  try {
    await Axios.post("http://127.0.0.1:5000/logout", {}, {
        headers: {
          "Authorization": ' Bearer ' + userInfo.access_token
        }
      });

    dispatch({ type: USER_LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({ type: USER_LOGOUT_FAIL, payload: error.message });
  }
}
export { signin, register, logout };
