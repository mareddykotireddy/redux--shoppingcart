// import axios from "axios";
import fakeStoreApi from "../../apis/fakeStoreApi";
import{ActionTypes} from"../contants/action-types";

export const fetchProducts = ()=> async (dispatch)=>{
        const response = await fakeStoreApi.get("/products");
        dispatch({type:ActionTypes.FETCH_PRODUCTS,payload:response.data})
    }



export const setProducts  =(products)=> {
    return{
        type:ActionTypes.SET_PRODUCTS,
        payload:products,
    };
} ;


export const selectedProduct  =(Product)=> {
    return{
        type:ActionTypes.SELECTED_PRODUCTS,
        payload:Product,
    };
} ;


export const removeSelectedProduct  =()=> {
    return{
        type:ActionTypes.REMOVE_SELECTED_PRODUCT,
    };
} ;
export const AddProduct = (value) => async dispatch =>{
    dispatch({
        type:"ADD",
        payload: value
    })
}
export const RemoveProduct = (value) => async dispatch =>{
dispatch({
    type:"REMOVE",
    payload: {name:value}
})
}




























