import React, { useContext } from 'react'
import FormatPrice from '../helpers/FormatPrice'
import AmountSort from './AmountSort'
import { MdDeleteForever } from "react-icons/md";
import { CartContext } from '../context/cart_context';

const CartItems = ({ id, name, image, color, price, amount, stock }) => {
    const { removeItem, setIncriment, setDicrement } = useContext(CartContext)

    return (
        <div className='row mx-5'>
            <div className='col-lg-1 d-flex'>
                <div >
                    <img className='cart-img' src={image} alt={id} />
                </div>
                <div>
                    <p>{name}</p>
                    <div className='d-flex'>
                        <p>color:</p>
                        <div className='cart-color' style={{ background: color, color: color }}></div>
                    </div>
                </div>
            </div>
            <div className='col-lg-3'>
                <div>
                    {<FormatPrice price={price} />}
                </div>
            </div>
            <div className='col-lg-4 incriment'>

                {<AmountSort amount={amount}
                    setDicrement={() => setDicrement(id, stock)}
                    setIncriment={() => setIncriment(id, stock)}
                />}

            </div>
            <div className='col-lg-3'>
                <FormatPrice price={price * amount} />
            </div>
            <div className='col-lg-1'>
                <h4 className="text-danger"><MdDeleteForever
                    onClick={() => removeItem(id)} /></h4>

            </div>
        </div>
    )
}

export default CartItems