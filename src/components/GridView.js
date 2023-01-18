import React from 'react'
import { Link } from 'react-router-dom';


import FormatPrice from '../helpers/FormatPrice'
const GridView = ({ products }) => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                {products.map((item) => {
                    const { id, name, image, price, } = item;
                    return <div className='col-lg-4 col-md-4 col-sm-4 col-6' key={id}>


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

export default GridView