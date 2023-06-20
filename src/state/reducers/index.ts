import { combineReducers } from "redux";
import productReducer from "./productReducer";
import { StateInterface } from "../actions/actionsInterface";

export interface RootState{
    productState : StateInterface
}

export default combineReducers({
    productState: productReducer,
})