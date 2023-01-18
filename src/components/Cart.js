import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/cart_context'
import FormatPrice from '../helpers/FormatPrice'
import CartItems from './CartItems'

const Cart = () => {
    const { cart, clearCart, total_amount, shipping_fee } = useContext(CartContext)
    let ordermount = Number(total_amount) + Number(shipping_fee)

    if (cart.length === 0) {
        return <div className='container nothing-cart'>
            <h2 className='text start'>No Item In Cart</h2>
            <Link to='/product'>
                <h2><button className="btn btn-info button-cart" type="submit">Continue shopping</button></h2>  </Link>
        </div >
    }
    return (
        <div className='container'>
            <div className='row mt-5 mx-5'>
                <div className='col-lg-1 col-md-3 col-3'>item</div>
                <div className='col-lg-3 col-md-2 col-2'>price</div>
                <div className='col-lg-4 col-md-2 col-2'>quantity</div>
                <div className='col-lg-3 col-md-2 col-2'>subtotal</div>
                <div className='col-lg-1 col-md-3 col-3'> remove</div>
            </div>
            <hr className='w-100 mx-3' />
            <div>
                {cart.map((items) => {
                    return <CartItems key={items.id} {...items} />
                })}
            </div>
            <hr className='w-100 mx-3' />
            <div className='row my-4 mx-2'>
                <div className='col-lg-6 text-start'>
                    <Link to='/product'>
                        <button className="btn btn-info" type="submit">Continue shopping</button></Link>

                </div>
                <div className='col-lg-6 text-end ' >
                    <button
                        onClick={clearCart}
                        className="btn btn-danger" type="submit">Clear Cart
                    </button>
                    <div className='recipt container mt-3'>
                        <div className='row py-3'>
                            <div className='col-lg-6 text-secondary'><h6>subtotal:</h6></div>
                            <div className='col-lg-6' ><h6>   <FormatPrice price={total_amount} /></h6></div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 text-secondary'><h6>shipping fee:</h6></div>
                            <div className='col-lg-6 ' ><h6><FormatPrice price={shipping_fee} /></h6></div>
                        </div>
                        <hr />
                        <div className='row py-3'>
                            <div className='col-lg-6 text-secondary'><h6>order total:</h6></div>
                            <div className='col-lg-6' ><h6><FormatPrice price={ordermount} /></h6></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Cart