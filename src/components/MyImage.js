import React, { useState } from 'react'

const MyImage = ({ image }) => {
    const [mainImage, setMainImage] = useState(image[0])
    return (
        <div className='row'>
            <div className='col-lg-6 col-md-6 col-12 w-50'>
                {image.map((items, index) => {
                    return (
                        <div key={index} >


                            <img src={items.url} alt={items.filename} className="images py-1"
                                onClick={() => setMainImage(items)}
                            />

                        </div>

                    )

                })}
            </div>
            <div className='col-lg-6 col-md-6 col-12 d-flex align-items-center '>
                <img src={mainImage.url}
                    alt={mainImage.filename}
                    className='w-100'
                />
            </div>
        </div>
    )

}

export default MyImage