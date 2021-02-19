import Axios from "axios";
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
} from "../constants/pantryConstants";

const register = (pantry_name, contact_name, phone, type, address, geocode, schedule, organization_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: PANTRY_REGISTER_REQUEST, payload: { pantry_name, contact_name, phone, type, address, geocode, schedule, organization_id } });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.post("http://127.0.0.1:5000/addPantry", { pantry_name, contact_name, phone, type, address, geocode, "hours": JSON.stringify({schedule}), organization_id
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

const listPantries = () => async (dispatch) => {
    try{
    dispatch({ type: LIST_PANTRY_REQUEST});
    const { data } = await Axios.get("http://127.0.0.1:5000/allpantries", {}, {
    });
    dispatch({ type: LIST_PANTRY_SUCCESS, payload: data });
    }
    catch(error){
        dispatch({ type: LIST_PANTRY_FAIL, payload: error.message });
    }
}

const listMyPantries = (organization_id) => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_PANTRY_LIST_REQUEST });
    const { userSignin: { userInfo } } = getState();
    const user_id = userInfo.user_id;
    console.log(organization_id);
    const { data } = await Axios.get("http://127.0.0.1:5000/mypantries/" + organization_id, {}, {
      headers:
        { Authorization: 'Bearer ' + userInfo.access_token }
    });
    console.log("payload" + JSON.stringify(data));
    dispatch({ type: MY_PANTRY_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: MY_PANTRY_LIST_FAIL, payload: error.message });
  }
}

export { register, listPantries, listMyPantries };
