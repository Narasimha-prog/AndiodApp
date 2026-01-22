import { combineReducers } from "@reduxjs/toolkit";



import authReducer from "../auth/authSlice";
import countReducer from "../counter/counterSlice"
import themeReducer from "../theme/themeReducer";

export const rootReducer = combineReducers({
  auth: authReducer,
  count: countReducer,
  theme: themeReducer
});


