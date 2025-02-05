import { applyMiddleware, createStore } from "redux";
import inventoryReducer from "./inventoryReducer";
import { thunk } from "redux-thunk";

const store=createStore(inventoryReducer,applyMiddleware(thunk))
export default store;