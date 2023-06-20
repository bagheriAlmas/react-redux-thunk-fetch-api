import { Product, ActionTypes } from "./actionTypes";

export interface StateInterface {
    items: Product[];
    message:string;
    isLoading: boolean;
  }

interface fetchProductStart{
    type: ActionTypes.FETCH_PRODUCTS_START
}
interface fetchProductSuccess{
    type : ActionTypes.FETCH_PRODUCTS_SUCCESS
    payload : any
}

interface fetchProductsFailed{
    type: ActionTypes.FETCH_PRODUCTS_FAILED
    payload : string
}

export type ActionInterface = fetchProductStart | fetchProductSuccess | fetchProductsFailed