import {
  ORG_REGISTER_REQUEST,
  ORG_REGISTER_SUCCESS,
  ORG_REGISTER_FAIL,
  LIST_ORG_REQUEST,
  LIST_ORG_SUCCESS,
  LIST_ORG_FAIL
} from "../constants/orgConstants";

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

function orgListReducer(state = {}, action) {
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

export {
  orgRegisterReducer, orgListReducer
}
