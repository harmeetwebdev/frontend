import React from 'react'
import { FaStarHalfAlt, FaStar } from "react-icons/fa";

export const Rating = ({ stars, reviews }) => {
    return (
        <div className='d-flex'>
            <div className='text-warning'>
                <span>
                    {stars >= 1 ? <FaStar />

                        : stars >= 0.5 ? <FaStarHalfAlt /> : <FaStar />
                    }
                </span>
                <span>
                    {stars >= 2 ? <FaStar />

                        : stars >= 1.5 ? <FaStarHalfAlt /> : <FaStar />
                    }
                </span>
                <span>
                    {stars >= 3 ? <FaStar />

                        : stars >= 2.5 ? <FaStarHalfAlt /> : <FaStar />
                    }
                </span>
                <span>
                    {stars >= 4 ? <FaStar />

                        : stars >= 3.5 ? <FaStarHalfAlt /> : <FaStar />
                    }
                </span>
                <span>
                    {stars >= 5 ? <FaStar />

                        : stars >= 4.5 ? <FaStarHalfAlt /> : <FaStar />
                    }
                </span>
            </div >
            <div className='text-secondary'>
                <span className='mx-2'>
                    ({reviews} customer reviews)
                </span>
            </div>



        </div>
    )
}
