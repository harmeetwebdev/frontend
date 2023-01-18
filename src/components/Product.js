

import FilterProduct from '../helpers/FilterProduct'
import ProductItems from '../helpers/ProductItems'
import Sort from './Sort'

const Product = () => {


    return (
        <div className='container d-flex'>

            <div>
                <FilterProduct />
            </div>
            <div className='container'>
                <div>
                    <Sort />
                </div>
                <div>
                    <ProductItems />
                </div>
            </div>
        </div>
    )
}

export default Product