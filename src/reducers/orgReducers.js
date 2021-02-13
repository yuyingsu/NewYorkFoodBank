import {
  ORG_REGISTER_REQUEST,
  ORG_REGISTER_SUCCESS,
  ORG_REGISTER_FAIL
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

export {
  orgRegisterReducer
}
