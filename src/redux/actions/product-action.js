import { ProductActionTypes } from "../constants/product-action-types";

export const allProduct = (products) => {
    return {
        type: ProductActionTypes.ALL_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ProductActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const removeProduct = (product) => {
    return {
        type: ProductActionTypes.REMOVE_PRODUCT,
    };
};