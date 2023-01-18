import { createContext, useContext, useEffect, useReducer } from "react";
import Reducer from "./Reducer";
import { Store } from "./Store";

export const Filter = createContext()
const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    sort_item: "lowest",
    filters: {
        text: '',
        category: "all",
        company: "all",
        color: "all",
        maxprice: 0,
        price: 0,
        minprice: 0
    },
}
const FilterProvider = ({ children }) => {
    const { products } = useContext(Store)
    const [state, dispatch] = useReducer(Reducer, initialState)

    const SetGridview = () => {
        return dispatch({ type: "SET_GRIDVIEW" })

    }
    const SetListView = () => {
        return dispatch({ type: 'SET_LISTVIEW' })
    }
    const Sorting = () => {
        return dispatch({
            type: "GET_SORT_ITEM",
        })
    }
    const ClearFilter = () => {
        dispatch({ type: "CLEAR_FILTER" })
    }
    const updatefilterValue = (event) => {
        let name = event.target.name
        let value = event.target.value
        return dispatch({ type: 'UPDATE_BY_SERCH', payload: { name, value } })
    }
    useEffect(() => {
        dispatch({ type: 'FILTERS' })
    }, [state.filters])
    useEffect(() => {

        dispatch({ type: "SORTING_PRODUCTS", payload: products })
    }, [products, state.sort_item,]);

    useEffect(() => {
        dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products })
    }, [products]);

    return <Filter.Provider value={{
        ...state,
        SetGridview,
        SetListView,
        Sorting,
        updatefilterValue,
        ClearFilter
    }}>{children}</Filter.Provider>

}
export default FilterProvider