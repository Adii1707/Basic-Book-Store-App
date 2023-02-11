import * as Types from "./actionType";
import axios from "axios";
export const getrequest = ()=>{
    return {
        type: Types.GET_PRODUCT_REQUEST
    }
}

export const getsuccess = (payload)=>{
    return {
        type: Types.GET_PRODUCT_SUCCESS,
        payload: payload
    }
}

export const getfailure = ()=>{
    return {
        type: Types.GET_PRODUCT_FAILURE
    }
}


    export const getData = () => async (dispatch) => {
        try {
          dispatch(getrequest());
          await axios
            .get(`https://wild-tan-iguana-slip.cyclic.app/product`)
            .then((res) => {
              dispatch(getsuccess(res.data));
            });
        } catch (err) {
          dispatch(getfailure());
        }
      };
