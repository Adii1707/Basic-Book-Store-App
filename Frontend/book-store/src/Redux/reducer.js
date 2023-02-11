import * as Types from "./actionType";

const initialState = {
    loading: false,
    data: [],
    error: false,
}
export const reducer = (state= initialState, action)=>{
    const {type, payload} = action;

   switch(type){
    case Types.GET_PRODUCT_REQUEST: 
    return {
            ...state,
            loading: true,

    }
    case Types.GET_PRODUCT_SUCCESS: 
    return {
            ...state,
            loading: false,
            data: payload,
            error: false
            
    }
    case Types.GET_PRODUCT_FAILURE: 
    return {
            ...state,
            loading: true,
            error: true,
            
    }
    default : return state;
   }

}

