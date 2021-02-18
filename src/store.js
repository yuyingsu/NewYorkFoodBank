import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import {
  myOrgListReducer,
  orgListReducer,
  orgReducer,
  orgRegisterReducer,
  orgUpdateReducer
 } from './reducers/orgReducers';
 import {
  pantryListReducer, pantryRegisterReducer
 } from './reducers/pantryReducers';
import {
  userSigninReducer,
  userRegisterReducer
} from './reducers/userReducers';
import Cookie from 'js-cookie';

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  userSignin: { userInfo }
};

const rootReducer = combineReducers({
  myOrgList: myOrgListReducer,
  org: orgReducer,
  orgList: orgListReducer,
  orgRegister: orgRegisterReducer,
  orgUpdate: orgUpdateReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  pantryList: pantryListReducer,
  pantryRegister: pantryRegisterReducer,
});

const storeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  rootReducer,
  initialState,
  storeEnhancers(applyMiddleware(thunk))
);

export default store;
