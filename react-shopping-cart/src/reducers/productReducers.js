import { FETECH_PRODUCTS } from "../types";

export const productsReducer=(state={},action )=>
{
    switch(action.type)
    {
        case FETECH_PRODUCTS:
            return {items:action.payload};
        default:
            return state;
    }
}