import Axios from "axios";
import Cookie from 'js-cookie';
import {
  ORG_REGISTER_REQUEST,
  ORG_REGISTER_SUCCESS,
  ORG_REGISTER_FAIL,
} from "../constants/orgConstants";

const register = (organization_name, contact_name, phone, type, address, geocode, schedule) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORG_REGISTER_REQUEST, payload: {organization_name, contact_name, phone, type, address, geocode, schedule} });
    const { userSignin: { userInfo } } = getState();
    console.log(userInfo)
    const { data } = await Axios.post("http://127.0.0.1:5000/add", { organization_name, contact_name, phone, type, address, geocode, "hours": JSON.stringify({schedule}), "user_id": userInfo.user_id
    }, {
      headers: {
        Authorization: ' Bearer ' + userInfo.token
      }
    });
    dispatch({ type: ORG_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORG_REGISTER_FAIL, payload: error.message });
  }
}

export { register };
