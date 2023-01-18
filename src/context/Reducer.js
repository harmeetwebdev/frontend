const Reducer = (state, action) => {
    switch (action.type) {


        case "SET_LOADING":
            return {
                ...state, isloading: true
            }
        case 'MY_API_PRODUCTS':
            const fetchData = action.payload.filter((items) => {
                return items.featured === true
            })
            return {
                ...state, isloading: false, products: action.payload, featureProducts: fetchData
            }
        case 'PRODUCT_ERROR':
            return {
                ...state, isError: true, isloading: false
            }
        case "SET_SINGLE_LOADING":
            return {
                ...state, isSingleLoading: true
            }
        case 'MYSINGLE_API_PRODUCTS':

            return {
                ...state, isSingleLoading: false, singleProducts: action.payload
            }
        case 'SINGLE_PRODUCT_ERROR':
            return {
                ...state, isError: true, isSingleloading: false
            }
        case 'LOAD_FILTER_PRODUCTS':
            let priceArr = action.payload.map((items) => {
                return items.price
            })


            // let maxprice = priceArr.reduce((initial, items) =>
            //     Math.max(initial, items), 0
            // )
            // console.log(maxprice)
            let maxprice = Math.max(...priceArr)
            return {
                ...state, filter_products: [...action.payload],
                all_products: [...action.payload],
                filters: { ...state.filters, maxprice: maxprice, price: maxprice }
            }
        case "SET_GRIDVIEW":
            return {
                ...state, grid_view: true
            }
        case "SET_LISTVIEW":
            return {
                ...state, grid_view: false
            }
        case "GET_SORT_ITEM":
            const user_id = document.getElementById("sort")
            const sort_value = user_id.options[user_id.selectedIndex].value;
            return {
                ...state, sort_item: sort_value,
            }
        case "SORTING_PRODUCTS":
            let new_sort_data
            let tempsort = [...action.payload]
            if (state.sort_item === 'lowest') {
                new_sort_data = tempsort.sort((a, b) => {
                    return a.price - b.price;
                })
            }
            if (state.sort_item === 'highest') {
                new_sort_data = tempsort.sort((a, b) => {
                    return b.price - a.price;
                })
            }
            if (state.sort_item === 'a-z') {
                new_sort_data = tempsort.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            }
            if (state.sort_item === 'z-a') {
                new_sort_data = tempsort.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                })
            }

            return {
                ...state,
                filter_products: new_sort_data
            }
        case 'UPDATE_BY_SERCH':
            const { name, value } = action.payload
            return {
                ...state,
                filters: {
                    ...state.filters, [name]: value
                }
            }
        case 'FILTERS':
            let { all_products } = state
            let tempFilter = [...all_products]
            const { text, category, company, color, price } = state.filters
            if (text) {
                tempFilter = tempFilter.filter((items) => {
                    return items.name.toLowerCase().includes(text)
                })
            }
            if (category !== 'all') {
                tempFilter = tempFilter.filter(
                    (items) => items.category === category
                )
            }
            if (company !== 'all') {
                tempFilter = tempFilter.filter(
                    (items) => items.company.toLowerCase() === company.toLowerCase()
                )
            }

            if (color !== 'all') {
                tempFilter = tempFilter.filter(
                    (items) => items.colors.includes(color)
                )

            }
            if (price === 0) {
                tempFilter = tempFilter.filter(
                    (items) => items.price = price
                )
            }
            else {
                tempFilter = tempFilter.filter(
                    (items) => items.price <= price
                )
            }

            return {
                ...state,
                filter_products: tempFilter
            }
        case "CLEAR_FILTER":
            return {
                ...state,
                filters: {
                    ...state.filters,
                    text: '',
                    category: "all",
                    company: "all",
                    color: "all",
                    maxprice: 0,
                    price: state.filters.price,
                    minprice: state.filters.maxprice
                }
            }

        default:
            return state
    }

}

export default Reducer