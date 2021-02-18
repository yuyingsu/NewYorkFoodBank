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
  GET_ORG_REQUEST,
  GET_ORG_SUCCESS,
  GET_ORG_FAIL,
  ORG_UPDATE_REQUEST,
  ORG_UPDATE_SUCCESS,
  ORG_UPDATE_FAIL
} from "../constants/orgConstants";


function orgReducer(state = {}, action) {
  switch (action.type) {
    case GET_ORG_REQUEST:
      return { loading: true };
    case GET_ORG_SUCCESS:
      return { loading: false, org: action.payload };
    case GET_ORG_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function myOrgListReducer(state = {
  orgs: []
}, action) {
  switch (action.type) {
    case MY_ORG_LIST_REQUEST:
      return { loading: true };
    case MY_ORG_LIST_SUCCESS:
      return { loading: false, orgs: action.payload };
    case MY_ORG_LIST_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function orgRegisterReducer(state = {}, action) {
  switch (action.type) {
    case ORG_REGISTER_REQUEST:
      return { loading: true };
    case ORG_REGISTER_SUCCESS:
      return { loading: false, orgInfo: action.payload };
    case ORG_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function orgListReducer(state = { loading: true }, action) {
  switch (action.type) {
    case LIST_ORG_REQUEST:
      return { loading: true };
    case LIST_ORG_SUCCESS:
      return { loading: false, orgs: action.payload };
    case LIST_ORG_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

function orgUpdateReducer(state = {}, action) {
  switch (action.type) {
    case ORG_UPDATE_REQUEST:
      return { loading: true };
    case ORG_UPDATE_SUCCESS:
      return { loading: false, org: action.payload };
    case ORG_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default: return state;
  }
}

export {
  myOrgListReducer,
  orgListReducer,
  orgReducer,
  orgRegisterReducer,
  orgUpdateReducer
}
