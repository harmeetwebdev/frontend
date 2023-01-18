import React from 'react'
import { useContext } from 'react'

import { Filter } from '../context/FilterContext'
import { FaCheck } from "react-icons/fa";
import FormatPrice from '../helpers/FormatPrice'

const FilterProduct = () => {
    const { filters: { text,  price, color, maxprice, minprice }, updatefilterValue, all_products, ClearFilter } = useContext(Filter)
    const getData = (data, property) => {
        let newval = data.map((items) => {
            return items[property]
        })
        if (property === "colors") {
            // return newval = ['all', ...new Set([].concat(...newval))]
            newval = newval.flat()
        }
        return newval = ['all', ...new Set(newval)]



    }

    const categoryData = getData(all_products, "category")
    const companyData = getData(all_products, "company")
    const colorData = getData(all_products, "colors")


    return (
        <div className='mt-5'>
            <form onSubmit={(e) => e.preventDefault()}>
                <input
                    type='text'
                    name='text'
                    placeholder='search'
                    value={text}
                    onChange={updatefilterValue}
                />
            </form>
            <div className='text-start mt-3'>
                <h3>Category</h3>
                <div>{categoryData.map((items,index) => {
                    return <div key={index}>
                        <button
                            type='button'
                            className="btn btn-light m-2"
                            name='category'
                            value={items}

                            onClick={updatefilterValue}
                        >{items}</button></div>
                })}</div>
            </div>
            <div className='text-start mt-3'>
                <h3>Company</h3>
                <div className='mt-4'>
                    <form action='#'>
                        <select name='company' id='company' onClick={updatefilterValue}>
                            {companyData.map((items,index) => {
                                return <option key={index}
                                    value={items}
                                    name='company'
                                    className='text-capitalize'
                                > {items}</option>
                            })}

                        </select>
                    </form>
                </div>
                <div className='text-start mt-3'>
                    <h3>Colors</h3>
                    <div className='mt-4'>
                        {colorData.map((items,index) => {
                            if (color === "all") {
                                return (
                                    <button
                                    key={index}
                                        // style={{ backgroundColor: items }}
                                        onClick={updatefilterValue}
                                        type='button'
                                        value={items}
                                        name='color'
                                    >{color === items ? <FaCheck className='check' /> : <FaCheck className='check' />}</button>
                                )

                            }
                            return <button className={color === items ? "rounded-button-active" : "rounded-button"}
                                style={{ backgroundColor: items }}
                                onClick={updatefilterValue}
                                key={index}
                                type='button'
                                value={items}
                                name='color'
                            >{color === items ? <FaCheck className='check' /> : null}</button>


                        })}
                    </div>
                </div>
                <div className='text-start mt-3' >
                    <h3>Price</h3>
                    <p>
                        <FormatPrice price={price} />
                    </p>
                    <div>
                        <input type="range"
                            name='price'
                            min={minprice} max={maxprice} value={price} onChange={updatefilterValue} />
                    </div>
                    <div className='mt-3'>
                        <button
                            onClick={ClearFilter}
                            type="button"
                            className="btn btn-outline-danger">clear filter</button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default FilterProduct