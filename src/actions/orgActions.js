import Axios from "axios";
import Cookie from 'js-cookie';
import {
  ORG_REGISTER_REQUEST,
  ORG_REGISTER_SUCCESS,
  ORG_REGISTER_FAIL,
} from "../constants/orgConstants";

const register = (organizationName, contactName, phone, type, address, geocode, schedule) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORG_REGISTER_REQUEST, payload: {organizationName, contactName, phone, type, address, geocode, schedule} });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.post("http://127.0.0.1:5000/add", {
      "organization_name": organizationName,
      "contact_name": contactName,
      "phone": phone,
      "type": type,
      "address": address,
      "geocode": geocode,
      "hours": JSON.stringify({schedule})
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
