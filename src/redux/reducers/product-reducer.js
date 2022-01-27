import { ProductActionTypes } from "../constants/product-action-types";

const initialState={
    productList:[{
        id : 111,
        title : "Laptop",
        price : 1499,
        description : " Great Product at best price",
        category : "Electronics"
    },{
        id : 111,
        title : "Laptop",
        price : 1499,
        description : " Great Product at best price",
        category : "Electronics"

    }]
}

export const productReducer = (state = initialState, action) =>{
    switch(action.type){
        case ProductActionTypes.ALL_PRODUCTS:
            return state;
        default:
            return state;
    }
}
