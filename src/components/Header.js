import React, { useContext } from 'react'
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { CartContext } from '../context/cart_context';

function Header() {
    const { total_item } = useContext(CartContext)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img className='Header-img' src='/images/PRINCE.png' alt='' />
                    </Link>
                    <ul className="navbar-nav me-end mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item px-3">
                            <Link className="nav-link fw-bold fs-5" to="/">Home</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link fw-bold fs-5" to="/about">About</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link fw-bold fs-5" to="/product">Products</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link fw-bold fs-5" to="/contact">Contacts</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link fs-4 px-3 active " to="/login">login<FiLogIn /></Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link fs-3 active px-3 cart" to="/cart"><FiShoppingCart />
                            </Link>
                            <span className="badge bg-danger cart-value">{total_item}</span>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Header