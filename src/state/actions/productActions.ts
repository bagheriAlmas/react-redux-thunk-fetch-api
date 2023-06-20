import { Dispatch } from "redux"
import { Product, ActionTypes } from "./actionTypes"

export function getAllProducts(dispatch:Dispatch) {
    const apiUrl = 'https://apitester.ir/api/Products';
    dispatch(fetchProductsStart())

    fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        dispatch(fetchProductsSuccess(data))
    })
    .catch(error =>{
        dispatch(fetchProductsFailed(error))
    })

};

export const fetchProductsStart = () =>({
    type : ActionTypes.FETCH_PRODUCTS_START
})

export const fetchProductsSuccess = (data:any) =>({
    type : ActionTypes.FETCH_PRODUCTS_SUCCESS,
    payload : data
})

export const fetchProductsFailed = (errorMessage:string) =>({
    type : ActionTypes.FETCH_PRODUCTS_FAILED,
    payload : errorMessage
})


