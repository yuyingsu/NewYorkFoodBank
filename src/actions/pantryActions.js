import Axios from "axios";
import {
  LIST_PANTRY_REQUEST,
  LIST_PANTRY_SUCCESS,
  LIST_PANTRY_FAIL,
  MY_PANTRY_LIST_REQUEST,
  MY_PANTRY_LIST_SUCCESS,
  MY_PANTRY_LIST_FAIL,
  PANTRY_REGISTER_REQUEST,
  PANTRY_REGISTER_SUCCESS,
  PANTRY_REGISTER_FAIL,
  PANTRY_UPDATE_REQUEST,
  PANTRY_UPDATE_SUCCESS,
  PANTRY_UPDATE_FAIL,
  SINGLE_PANTRY_LIST_REQUEST,
  SINGLE_PANTRY_LIST_SUCCESS,
  SINGLE_PANTRY_LIST_FAIL,
} from "../constants/pantryConstants";

const listMyPantries = (organization_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_PANTRY_LIST_REQUEST });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.get("https://newyorkfoodbank.netlify.app/mypantries/" + organization_id, {}, {
      headers:
        { Authorization: 'Bearer ' + userInfo.access_token }
    });
    dispatch({ type: MY_PANTRY_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: MY_PANTRY_LIST_FAIL, payload: error.message });
  }
}

const listPantries = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_PANTRY_REQUEST});
    const { data } = await Axios.get("https://newyorkfoodbank.netlify.app/allpantries", {}, {
    });
    dispatch({ type: LIST_PANTRY_SUCCESS, payload: data });
  } catch (error){
    dispatch({ type: LIST_PANTRY_FAIL, payload: error.message });
  }
}

const listSinglePantry = (pantry_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: SINGLE_PANTRY_LIST_REQUEST });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.get("https://newyorkfoodbank.netlify.app/pan/" + pantry_id, {}, {
      headers:
        { Authorization: 'Bearer ' + userInfo.access_token }
    });
    dispatch({ type: SINGLE_PANTRY_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: SINGLE_PANTRY_LIST_FAIL, payload: error.message });
  }
}

const register = (pantry_name, contact_name, phone, type, address, geocode, schedule, organization_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PANTRY_REGISTER_REQUEST, payload: { pantry_name, contact_name, phone, type, address, geocode, schedule, organization_id } });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.post("https://newyorkfoodbank.netlify.app/addPantry", { pantry_name, contact_name, phone, type, address, geocode, "hours": JSON.stringify({schedule}), organization_id
    }, {
      headers: {
        Authorization: ' Bearer ' + userInfo.access_token
      }
    });
    dispatch({ type: PANTRY_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PANTRY_REGISTER_FAIL, payload: error.message });
  }
}

const update = (pantry_name, contact_name, phone, type, address, geocode, schedule, id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PANTRY_UPDATE_REQUEST, payload: { pantry_name, contact_name, phone, type, address, geocode, schedule, id } });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.put("https://newyorkfoodbank.netlify.app/editPantry", { pantry_name, contact_name, phone, type, address, geocode, "hours": JSON.stringify({schedule}), id
    }, {
      headers: {
        Authorization: ' Bearer ' + userInfo.access_token
      }
    });
    dispatch({ type: PANTRY_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: PANTRY_UPDATE_FAIL, payload: error.message });
  }
}

export {
  listMyPantries,
  listPantries,
  listSinglePantry,
  register,
  update
};
