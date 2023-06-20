export enum ActionTypes {
    FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START',
    FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS',
    FETCH_PRODUCTS_FAILED = 'FETCH_PRODUCTS_FAILED',
}

export type Product = {
    productId: number,
    productName: string,
    unitPrice: number,
}