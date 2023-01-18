import React, { useContext } from 'react'
import GridView from '../components/GridView'
import Listview from '../components/Listview'
import { Filter } from '../context/FilterContext'

const ProductItems = () => {
  const { filter_products, grid_view } = useContext(Filter)

  if (grid_view === true) {
    return <GridView products={filter_products} />
  }
  if (grid_view === false) {
    return <Listview products={filter_products} />
  }

}

export default ProductItems