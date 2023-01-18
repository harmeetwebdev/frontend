import { createContext, useEffect, useReducer } from "react";
import axios from 'axios'
import Reducer from "./Reducer";
export const Store = createContext()
const API = 'https://api.pujakaitem.com/api/products'

const initialState = {
    isloading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProducts: { image: [{ url: "" }] },

}
const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState)
    const getProduct = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {

            const response = await axios.get(url)
            const products = await response.data

            dispatch({
                type: 'MY_API_PRODUCTS',
                payload: products
            })
        } catch (error) {
            dispatch({
                type: 'PRODUCT_ERROR',

            })
        }

    }
    const getSingleProduct = async (url) => {
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const response = await axios.get(url)
            const singleProducts = await response.data
            dispatch({
                type: 'MYSINGLE_API_PRODUCTS',
                payload: singleProducts
            })
        } catch (error) {
            dispatch({
                type: 'SINGLE_PRODUCT_ERROR',

            })
        }
    }
    useEffect(() => {
        getProduct(API)
    }, []);


    return <Store.Provider value={{ ...state, getSingleProduct }}> {children}</Store.Provider >
}

export default StoreProvider 
