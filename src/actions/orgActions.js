import Axios from "axios";
import {
  ORG_REGISTER_REQUEST,
  ORG_REGISTER_SUCCESS,
  ORG_REGISTER_FAIL,
  LIST_ORG_REQUEST,
  LIST_ORG_SUCCESS,
  LIST_ORG_FAIL,
  MY_ORG_LIST_REQUEST,
  MY_ORG_LIST_SUCCESS,
  MY_ORG_LIST_FAIL,
  REMOVE_ORG_REQUEST,
  REMOVE_ORG_SUCCESS,
  REMOVE_ORG_FAIL,
  GET_ORG_REQUEST,
  GET_ORG_SUCCESS,
  GET_ORG_FAIL
} from "../constants/orgConstants";

const register = (organization_name, phone, type, address, url) => async (dispatch, getState) => {
  try {
    dispatch({ type: ORG_REGISTER_REQUEST, payload: {organization_name, phone, type, address, url} });
    const { userSignin: { userInfo } } = getState();
    console.log(userInfo)
    const { data } = await Axios.post("http://127.0.0.1:5000/add", { organization_name, phone, type, address, url, "user_id": userInfo.user_id
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

const listOrg = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: GET_ORG_REQUEST });
    const { userSignin: { userInfo } } = getState();
    const { data } = await Axios.get("http://127.0.0.1:5000/org/" + id, {
      headers:
        { Authorization: 'Bearer ' + userInfo.access_token }
    });
    dispatch({ type: GET_ORG_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: GET_ORG_FAIL, payload: error.message });
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

const listMyOrgs = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_ORG_LIST_REQUEST });
    const { userSignin: { userInfo } } = getState();
    console.log({"user_id": userInfo.user_id});
    const user_id = userInfo.user_id;
    const temp = {user_id};
    console.log(temp)
    const { data } = await Axios.get("http://127.0.0.1:5000/myorganizations/" + user_id, {
      headers:
        { Authorization: 'Bearer ' + userInfo.access_token }
    });
    dispatch({ type: MY_ORG_LIST_SUCCESS, payload: data })
  } catch (error) {
    dispatch({ type: MY_ORG_LIST_FAIL, payload: error.message });
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

const updateOrg = (org_id, organization_name) => async (dispatch) => {
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

export { register, listOrg, listOrgs, listMyOrgs, removeOrg, updateOrg };
