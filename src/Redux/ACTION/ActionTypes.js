import FakeApiStore from "../../Api/FakeApiStore";
import {
    SELECT_PRODUCT,
    SELECTED_PRODUCT,
    REMOVE_PRODUCT,
    FETCH_PRODUCT,
    ADD_PRODUCT,
    REMOVE_CART_PRODUCT,
    QUANTITY
}
    from "../CONSTANT/ConstantTypes";

export const selectProduct = (products) => {
    return {
        type: SELECT_PRODUCT,
        payload: products
    }
}

export const selectedProduct = (product) => {
    return {
        type: SELECTED_PRODUCT,
        payload: product
    }
}

export const removeProduct = () => {
    return {
        type: REMOVE_PRODUCT,
    }
}

export const fetchProduct = () => {
    return async (dispatch) => {
        const response = await FakeApiStore.get("/products")
        dispatch({ type: FETCH_PRODUCT, payload: response.data })
    }
}
export const fetchProd = (id) => {
    return async (dispatch) => {
        const response = await FakeApiStore.get(`/products/${id}`)
        dispatch({ type: SELECTED_PRODUCT, payload: response.data })
    }
}

export const addProduct = (prod) => {
    return {
        type : ADD_PRODUCT,
        payload : prod
    }
}
export const removeCartProduct = (cartProduct) => {
    return {
        type : REMOVE_CART_PRODUCT,
        payload : cartProduct
    }
}

export const incQuantity = (id,d) => {
    return {
        type : QUANTITY,
        payload : {id,d}
    }
}

