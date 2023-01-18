import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Store } from '../context/Store'
import FormatPrice from '../helpers/FormatPrice'

const FeaturesProduct = () => {
    const { isloading, featureProducts } = useContext(Store)
    if (isloading) {
        return <div>...loading.....</div>
    }
    return (
        <div className='container'>
            <div className='pt-3'>
                <h5 className='text-primary'>Check Now</h5>
                <h2>Our Features</h2></div>

            <div className='row'>

                {featureProducts.map((item) => {
                    const { id, name, image, price } = item;
                    return <div className='col-lg-4 my-3' key={id} >
                        <Link to={`/singleProduct/${id}`}>
                            <div className=' rounded bg-white w-100 h-100'>
                                <div className="bg-image hover-zoom ">
                                    <img className='img-fluid rounded mt-5 ' src={image} alt="" />

                                </div>

                                <div className='d-flex justify-content-around mt-3 fs-5 text-capitalize'>
                                    <p>{name}</p>
                                    <p className='text-primary'>{<FormatPrice price={price} />}</p>
                                </div>
                            </div>
                        </Link>

                    </div>
                })}


            </div>


        </div>
    )
}

export default FeaturesProduct