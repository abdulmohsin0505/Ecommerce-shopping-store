import {
    SELECT_PRODUCT,
    SELECTED_PRODUCT,
    REMOVE_PRODUCT,
    FETCH_PRODUCT,
    ADD_PRODUCT,
    REMOVE_CART_PRODUCT,
    QUANTITY
} from "../CONSTANT/ConstantTypes";

const initialState = {
    products: [],
    cart: [],
    total: 0
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_PRODUCT: return {
            ...state,
            products: action.payload
        }
        case FETCH_PRODUCT: return {
            ...state,
            products: action.payload
        }
        default: return state
    }
}

export const selectedReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case SELECTED_PRODUCT:
            return {
                ...state,
                ...payload
            }

        case REMOVE_PRODUCT:
            return {}

        default: return state
    }
}

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            if (!state.cart.find((item) => item.id === action.payload.id)) {
                state.cart.push({
                    ...action.payload,
                    quantity: 1,
                });
            }
            return {
                ...state,
                cart: [...state.cart],
            };
        case REMOVE_CART_PRODUCT:
            const newCart = state.cart.filter(item =>
                item.id !== action.payload.id
            );
            return {
                ...state,
                cart: [...newCart]
            };
        case QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item => item.id === action.payload.id
                    ? {
                        ...item,
                        quantity: item.quantity + action.payload.d,
                    }
                    : item)
            }

        default: return state
    }
}



