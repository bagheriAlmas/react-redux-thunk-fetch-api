import { ActionInterface, StateInterface } from '../actions/actionsInterface'
import { ActionTypes } from '../actions/actionTypes';

const initialState ={
    items: [],
    message : '',
    isLoading : false
}

function productReducer(state: StateInterface = initialState, action: ActionInterface) {
    switch (action.type) {
        case ActionTypes.FETCH_PRODUCTS_START:
            return { items: [], message: '', isLoading:true };
        case ActionTypes.FETCH_PRODUCTS_SUCCESS:
            return { items: action.payload, message: '', isLoading: false };
        case ActionTypes.FETCH_PRODUCTS_FAILED:
            return { items: [], message: action.payload, isLoading: false };
        default:
            return state;
    }
}

export default productReducer