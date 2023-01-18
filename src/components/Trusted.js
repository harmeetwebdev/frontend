import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { AiFillMoneyCollect } from "react-icons/ai";

const Trusted = () => {
    return (
        <div>
            <div className='container trusted'>
                <div className='row'>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-12'>
                        <div className='block rounded'>
                            <div className='transform'>
                                <TbTruckDelivery className="fs-2 text-primary mb-3" />
                                <p className='capitalize'> super fast and free delivery</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4 col-12 divide">
                        <div className="row">
                            <div className="col-12 col-sm-12 color mb-5 rounded"><span className='fs-2 text-primary' ><MdOutlineSecurity /></span> <p>Non Contact Shipping</p></div>

                            <div className="w-100 d-none d-md-blockc"></div>

                            <div className="col-12 col-sm-12 color rounded"><span className='fs-2 text-primary'><AiFillMoneyCollect /></span><p>Money Back Guaranted</p></div>

                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-4 col-12 margin'>
                        <div className='block rounded'>
                            <div className='transform'>
                                <TbTruckDelivery className="fs-2 text-primary mb-3" />
                                <p className='capitalize'> super fast and free delivery</p>
                            </div>
                        </div>
                    </div>



                </div>

            </div>

        </div>
    )
}

export default Trusted