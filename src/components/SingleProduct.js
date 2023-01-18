import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Store } from '../context/Store'
import FormatPrice from '../helpers/FormatPrice'
import MyImage from './MyImage'
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { Rating } from './Rating'
import AddToCart from './AddToCart'
const SingleProduct = () => {

    const { id } = useParams()
    const { getSingleProduct, isSingleLoading, singleProducts } = useContext(Store)
    const { name,
        company,
        price,
        description,

        stock,
        stars,
        reviews,
        image,
    } = singleProducts
    useEffect(() => {
        getSingleProduct(`https://api.pujakaitem.com/api/products?id=${id}`)
    }, [getSingleProduct,id]);
    if (isSingleLoading) {
        return <div>...Loading</div>
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className=" text-decoration-none  text-primary" to='/'><h5>Home</h5></Link>
                <h5 className='text-capitalize'>/ {name}</h5>
            </nav>
            <div className='container w-75 my-5 '>
                <div className='row'>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-12 d-flex align-items-center'>
                        <MyImage image={image} />
                    </div>
                    <div className='col-lg-6 col-md-6 col-sm-6 col-12 text-start single-items'>
                        <h1 className='text-secondary text-capitalize'>{name}</h1>
                        <span><Rating stars={stars} reviews={reviews} /></span>
                        <span>
                            MRP:
                            <del>
                                <FormatPrice price={price + 250000} />
                            </del>
                        </span>
                        <span className='text-primary'>Deal Of the Day <FormatPrice price={price} /></span>
                        <span className='text-start text-secondary'>{description}</span>
                        <div className='d-flex justify-content-around'>
                            <div >
                                <h5><TbTruckDelivery /></h5>
                                <span className='text-secondary'>Free Delivery</span>

                            </div>
                            <div>
                                <h5><TbReplace /></h5>
                                <span className='text-secondary'>30 Days Replacement</span>
                            </div>
                            <div>
                                <h5><TbTruckDelivery /></h5>
                                <span className='text-secondary'>Harmeet Delivered</span>

                            </div>
                            <div>
                                <h5><MdSecurity /></h5>
                                <span className='text-secondary'>2 Year Warranty</span>

                            </div>

                        </div>
                        <hr className='w-100' />
                        <div>
                            <h6><span className='text-secondary'>Available</span>: {stock > 0 ? "In Stock" : "Out Of Stock"}</h6>
                            <h6> <span className='text-secondary'>ID</span>: {id}</h6>
                            <h6 className='text-capitalize'><span className='text-secondary'>Brand</span>: {company}</h6>
                            <hr />
                            {stock > 0 && <AddToCart product={singleProducts} />}
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default SingleProduct