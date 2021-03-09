import Axios from "axios";
import {
  GET_ORG_REQUEST,
  GET_ORG_SUCCESS,
  GET_ORG_FAIL,
  LIST_ORG_REQUEST,
  LIST_ORG_SUCCESS,
  LIST_ORG_FAIL,
  MY_ORG_LIST_REQUEST,
  MY_ORG_LIST_SUCCESS,
  MY_ORG_LIST_FAIL,
  ORG_REGISTER_REQUEST,
  ORG_REGISTER_SUCCESS,
  ORG_REGISTER_FAIL,
  ORG_UPDATE_REQUEST,
  ORG_UPDATE_SUCCESS,
  ORG_UPDATE_FAIL,
  REMOVE_ORG_REQUEST,
  REMOVE_ORG_SUCCESS,
  REMOVE_ORG_FAIL,
} from "../constants/orgConstants";

const listMyOrgs = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_ORG_LIST_REQUEST });
    const { userSignin: { userInfo } } = getState();
    const user_id = userInfo.user_id;
    const { data } = await Axios.get("https://nyfoodbank.herokuapp.com/myorganizations/" + user_id, {
      headers:
        { Authorization: 'Bearer ' + userInfo.access_token }
    });
    dispatch({ type: MY_ORG_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: MY_ORG_LIST_FAIL, payload: error.message });
  }
}

const listOrg = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_ORG_REQUEST });
    const { data } = await Axios.get("https://nyfoodbank.herokuapp.com/org/" + id, {});
    dispatch({ type: GET_ORG_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_ORG_FAIL, payload: error.message });
  }
}

const listOrgs = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_ORG_REQUEST});
    const { data } = await Axios.get("https://nyfoodbank.herokuapp.com/allorganizations", {}, {
    });
    dispatch({ type: LIST_ORG_SUCCESS, payload: data });
  } catch(error){
    dispatch({ type: LIST_ORG_FAIL, payload: error.message });
  }
}

const register = (organization_name, phone, type, address, url) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORG_REGISTER_REQUEST, payload: {organization_name, phone, type, address, url} });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.post("https://nyfoodbank.herokuapp.com/add", { organization_name, phone, type, address, url, "user_id": userInfo.user_id
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

const removeOrg = (organization_name) => async (dispatch) => {
  try {
    dispatch({ type: REMOVE_ORG_REQUEST});
    await Axios.delete("https://nyfoodbank.herokuapp.com/organization/"+organization_name, {organization_name}, {
    });
    dispatch({ type: REMOVE_ORG_SUCCESS, payload: organization_name });
  } catch(error){
    dispatch({ type: REMOVE_ORG_FAIL, payload: error.message });
  }
}

const updateOrg = (id, organization_name, phone, type, address, url) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORG_UPDATE_REQUEST });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.put("https://nyfoodbank.herokuapp.com/edit", {id, organization_name, phone, type, address, url}, {
      headers:
        { Authorization: 'Bearer ' + userInfo.access_token }
    });
    dispatch({ type: ORG_UPDATE_SUCCESS, payload: data });
  } catch(error) {
    dispatch({ type: ORG_UPDATE_FAIL, payload: error.message });
  }
}

export { listMyOrgs,
  listOrg,
  listOrgs,
  register,
  removeOrg,
  updateOrg
};
