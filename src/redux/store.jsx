import { combineReducers, configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import UserSlice from "./UserSlice";

const reducer=combineReducers({
    user:UserSlice,
    todo:TodoSlice
})
 const store = configureStore({reducer});

export default store;