import { createContext, useEffect, useReducer } from "react";

import cartReducer from "./cartreducer"
export const CartContext = createContext()
const localCartData = () => {
    let newData = localStorage.getItem('harmeetCart',)
    if (newData === []) {
        return []
    } else {
        return JSON.parse(newData)
    }
}

const initialState = {
    // cart: [],
    cart: localCartData(),
    total_item: '',
    total_amount: '',
    shipping_fee: '5000'
}
const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState)
    const addToCart = ((id, color, amount, product) => {
        dispatch({ type: 'ADD_TO_CART', payload: { id, color, amount, product } })
    })
    const removeItem = ((id) => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: id
        })
    })
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }
    const setDicrement = (id, stock) => {
        dispatch({
            type: "SET_DECRIMENT",
            payload: id, stock
        })
    }
    const setIncriment = (id, stock) => {
        dispatch({
            type: "SET_INCRIMENT",
            payload: id
        })
    }
    useEffect(() => {
        dispatch({ type: "CART_ICON" })
        dispatch({ type: "CART_TOTAL_PRICE" })
        dispatch({type:"TOTAL_FINAL_PRICE"})
        localStorage.setItem('harmeetCart', JSON.stringify(state.cart))
    }, [state.cart]);

    return <CartContext.Provider value={{
        ...state, addToCart, removeItem,
        clearCart, setDicrement, setIncriment
    }}>{children}</CartContext.Provider>
}
export default CartProvider