import React, { useContext, useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart_context';
import AmountSort from './AmountSort';
const AddToCart = ({ product }) => {
    const { addToCart } = useContext(CartContext)
    const [amount, setAmount] = useState(1);
    const setDicrement = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1)
    }
    const setIncriment = () => {
        amount < stock ? setAmount(amount + 1) : setAmount(stock)
    }

    const { id, colors, stock } = product
    const [color, setColor] = useState(colors[0])
    return (
        <div>
            <div className='d-flex' >
                <h5>colors : </h5> {
                    colors.map((items,index) => {
                        return (
                            <div key={index} >
                                <button className={color === items ? "rounded-button-active" : "rounded-button"}
                                    style={{ backgroundColor: items }}
                                    onClick={() => setColor(items)}
                                >{color === items ? <FaCheck className='check' /> : null}</button>

                            </div>



                        )
                    })
                }

            </div >
            <div>
                <AmountSort amount={amount}
                    setDicrement={setDicrement}
                    setIncriment={setIncriment}
                />
            </div>
            <Link to='/cart'>
                <button
                    type="button"
                    onClick={() => addToCart(id, color, amount, product)}
                    className="btn btn-primary btn-md mt-2">Add To Cart</button>
            </Link>
        </div>
    )
}

export default AddToCart