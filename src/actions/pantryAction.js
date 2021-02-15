import Axios from "axios";
import {
  PANTRY_REGISTER_REQUEST,
  PANTRY_REGISTER_SUCCESS,
  PANTRY_REGISTER_FAIL,
  LIST_PANTRY_REQUEST,
  LIST_PANTRY_SUCCESS,
  LIST_PANTRY_FAIL,
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

export { register, listPantries };
