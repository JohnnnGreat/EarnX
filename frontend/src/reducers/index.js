import authReducer from "./auth";
import productReducer from "./product";
import { combineReducers } from "redux";

export default combineReducers({ authReducer, productReducer });
