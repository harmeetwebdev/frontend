import React from 'react'
import { Link } from 'react-router-dom'
import FeaturesProduct from './FeaturesProduct'

import Trusted from './Trusted'

const Home = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12">
                        <div className='text-start container mx-5'>
                            <h5 className="text-secondary" >Welcome To</h5>
                            <h1>Prince Ecomere</h1>
                            <p className='font-monospace text-secondary fs-5 mt-3'>I'm much more confident with crypto than with banks or fiat currency because I can actually control it, and the money supply is transparent, stated up front. It makes online shopping a lot easier and a lot safer.</p>
                            <p className='font-monospace text-primary fs-5' >Erik Voorhees</p>
                            <Link to='/product'>
                                <button type="button" className="btn btn-primary">
                                    Shop Now
                                </button>
                            </Link>

                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt-4">
                        <div>
                            <div className='box'></div>
                            <div><img className='img img-fluid' src='/images\prince.avif' alt='' /></div>
                        </div>


                    </div>
                </div>

            </div>
            <div className='trusted-last mb-5 rounded'>
                <FeaturesProduct />
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 col-md-12 col-12'>
                        <Trusted />

                    </div>

                </div></div>





            <div className='trusted-last mt-5 d-flex justify-content-center align-items-center'>
                <div className="row">
                    <div className="col-12 col-sm-12 mt-5 fw-bold"><p>Trusted By 10000+ Companies</p></div>

                    <div className="w-100 d-none d-md-blockc"></div>

                    <div className="col-12 col-sm-12">
                        <div className='row container'>
                            <div className='col-lg-3 col-md-3 col-6'><img className='img-fluide' src='/images/P1.png' alt='' /></div>
                            <div className='col-lg-3 col-md-3 col-6'><img className='img-fluide' src='/images/P2.png' alt='' /></div>
                            <div className='col-lg-3 col-md-3 col-6'><img className='img-fluide' src='/images/P3.png' alt='' /></div>
                            <div className='col-lg-3 col-md-3 col-6'><img className='img-fluide' src='/images/P4.png' alt='' /></div>
                        </div>

                    </div>


                </div>
            </div>

        </div>
    )
}

export default Home