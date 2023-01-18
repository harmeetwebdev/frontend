

const cartReducer = (state, action) => {


    if (action.type === 'ADD_TO_CART') {
        let { id, amount, product, color } = action.payload

        let existingProduct = state.cart.find(
            (items) => items.id === id + color
        )
       

        if (existingProduct) {
            let updateproduct = state.cart.map((items) => {

                if (items.id === id + color) {
                    let newAmount = items.amount + amount
                    if (newAmount >= items.max) {
                        newAmount = items.max
                    }
                    return {
                        ...items, amount: newAmount
                    }
                } else {
                    return items;
                }

            })
            return {
                ...state, cart: updateproduct
            }
        } else {
            let cartProducts = {
                id: id + color,
                color,
                amount,
                name: product.name,
                image: product.image[0].url,
                price: product.price,
                max: product.stock

            };
            return {
                ...state,
                cart: [...state.cart, cartProducts]
            }
        }

    }
    if (action.type === "SET_DECRIMENT") {
        let updateproduct = state.cart.map((items) => {
            if (items.id === action.payload) {
                let decriment = items.amount > 1 ? items.amount - 1 : items.amount

                return {
                    ...items,
                    amount: decriment
                }
            } else {
                return items;
            }
        })
        return { ...state, cart: updateproduct }

    }
    if (action.type === "SET_INCRIMENT") {
        let updateproduct = state.cart.map((items) => {
            if (items.id === action.payload) {
                let incriment = items.amount < items.max ? items.amount + 1 : items.amount

                return {
                    ...items,
                    amount: incriment
                }
            } else {
                return items;
            }
        })
        return { ...state, cart: updateproduct }

    }
    if (action.type === "REMOVE_ITEM") {
        let updateCart = state.cart.filter(
            (items) => items.id !== action.payload)
        return {
            ...state,
            cart: updateCart
        }
    }
    if (action.type === "CLEAR_CART") {
        return {
            ...state, cart: []
        }
    }
    if (action.type === "CART_ICON") {
        let updateCart = state.cart.reduce((initial, items) => {
            let { amount } = items
            initial = initial + amount
            return initial;
        }, 0)
        return {
            ...state,
            total_item: updateCart
        }

    }
    if (action.type === "CART_TOTAL_PRICE") {
        let cartValue = state.cart.reduce((initial, items) => {
            let { amount, price } = items
            initial = initial + (price * amount)
            return initial

        }, 0)
        return {
            ...state,
            total_amount: cartValue
        }
    }
    if (action.type === "TOTAL_FINAL_PRICE") {
        return {
            ...state
        }
    }



}
export default cartReducer
