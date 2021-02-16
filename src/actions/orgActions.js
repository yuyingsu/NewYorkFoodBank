import Axios from "axios";
import {
  ORG_REGISTER_REQUEST,
  ORG_REGISTER_SUCCESS,
  ORG_REGISTER_FAIL,
  LIST_ORG_REQUEST,
  LIST_ORG_SUCCESS,
  LIST_ORG_FAIL,
  REMOVE_ORG_REQUEST,
  REMOVE_ORG_SUCCESS,
  REMOVE_ORG_FAIL
} from "../constants/orgConstants";

const register = (organization_name, contact_name, phone, type, address, geocode, schedule) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORG_REGISTER_REQUEST, payload: {organization_name, contact_name, phone, type, address, geocode, schedule} });
    const { userSignin: { userInfo } } = getState();
    console.log(userInfo)
    const { data } = await Axios.post("http://127.0.0.1:5000/add", { organization_name, contact_name, phone, type, address, geocode, "hours": JSON.stringify({schedule}), "user_id": userInfo.user_id
    }, {
      headers: {
        "Authorization": ' Bearer ' + userInfo.access_token
      }
    });
    dispatch({ type: ORG_REGISTER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: ORG_REGISTER_FAIL, payload: error.message });
  }
}

const listOrgs = () => async (dispatch) => {
  try{
  dispatch({ type: LIST_ORG_REQUEST});
  const { data } = await Axios.get("http://127.0.0.1:5000/allorganizations", {}, {
  });
  dispatch({ type: LIST_ORG_SUCCESS, payload: data });
  }
  catch(error){
      dispatch({ type: LIST_ORG_FAIL, payload: error.message });
  }
}

const removeOrg = (organization_name) => async (dispatch) => {
  try{
  dispatch({ type: REMOVE_ORG_REQUEST});
  await Axios.delete("http://127.0.0.1:5000/organization/"+organization_name, {organization_name}, {
  });
  dispatch({ type: REMOVE_ORG_SUCCESS, payload: organization_name });
  }
  catch(error){
      dispatch({ type: REMOVE_ORG_FAIL, payload: error.message });
  }
}

const updateOrg = (org_id) => async (dispatch) => {
  try{
  dispatch({ type: LIST_ORG_REQUEST});
  const { data } = await Axios.get("http://127.0.0.1:5000/allorganizations", {organization_name}, {
  });
  dispatch({ type: LIST_ORG_SUCCESS, payload: data });
  }
  catch(error){
      dispatch({ type: LIST_ORG_FAIL, payload: error.message });
  }
}

export { register, listOrgs, removeOrg, updateOrg };
