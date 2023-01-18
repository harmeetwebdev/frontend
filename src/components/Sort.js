import React, { useContext } from 'react'
import { BsFillGridFill, BsList } from "react-icons/bs";
import { Filter } from '../context/FilterContext';
const Sort = () => {
    const { filter_products, grid_view, SetGridview, SetListView, Sorting } = useContext(Filter)
    return (

        <div className='row mt-5 w-100'>
            <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                <button
                    onClick={SetGridview}
                    className={grid_view ? "sort-button-active" : "sort-button"}><BsFillGridFill /></button>
                <button
                    onClick={SetListView}
                    className={grid_view ? "sort-button" : "sort-button-active"}><BsList /></button>
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                <div className='d-flex'>
                    <p >{`${filter_products.length} products available`}</p>
                    <div className='mx-5 '>
                        <form action='#'>
                            <label htmlFor='sort'></label>
                            <select name='sort' id='sort' onClick={Sorting}>
                                <option value="lowest">Price(lowest)</option>
                                <option value="#" disabled></option>
                                <option value="highest">Price(highest)</option>
                                <option value="#" disabled></option>
                                <option value="a-z">Price(a-z)</option>
                                <option value="#" disabled></option>
                                <option value="z-a">Price(z-a)</option>
                            </select>
                        </form>
                    </div>
                </div>

            </div>

        </div>

    )
}

export default Sort