import React from 'react'
import { Link } from 'react-router-dom';

const Listview = ({ products }) => {
    return (
        <div className='container list-view mt-4'>

            {products.map((item) => {
                const { id, name, image,  description } = item;
                return <div className="card mb-3" style={{ width: '700px', height: '250px' }} key={id}>
                    <div className="row g-0 mt-4">
                        <div className="col-md-6">
                            <img src={image} className="img-fluid rounded-start"
                                alt="..." />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title text-capitalize" >{name}</h5>
                                <p className="card-text text-start">{description.slice(0, 99)}...</p>
                                <Link to={`/singleproduct/${id}`}>
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary mt-3">Read More</button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

            })}


        </div>
    )
}

export default Listview