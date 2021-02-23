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
  myPantryListReducer,
  pantryListReducer,
  pantryRegisterReducer,
  pantryUpdateReducer,
  singlePantryListReducer
 } from './reducers/pantryReducers';
import {
  userSigninReducer,
  userRegisterReducer,
  userDonateReducer,
  listDonateReducer
} from './reducers/userReducers';
import Cookie from 'js-cookie';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const userInfo = Cookie.getJSON('userInfo') || null;

const initialState = {
  userSignin: { userInfo }
};

const rootReducer = combineReducers({
  myOrgList: myOrgListReducer,
  myPantryList: myPantryListReducer,
  org: orgReducer,
  orgList: orgListReducer,
  orgRegister: orgRegisterReducer,
  orgUpdate: orgUpdateReducer,
  singlePantry: singlePantryListReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  userDonate: userDonateReducer,
  listDonate: listDonateReducer,
  pantryList: pantryListReducer,
  pantryRegister: pantryRegisterReducer,
  pantryUpdate: pantryUpdateReducer
});

const storeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer, )

export default () => {
  let store = createStore(persistedReducer, initialState,
    storeEnhancers(applyMiddleware(thunk)))
  let persistor = persistStore(store)
  return { store, persistor }
}
