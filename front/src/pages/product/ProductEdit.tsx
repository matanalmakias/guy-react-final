import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../../contexts/ProductContext'
// זה השלב - לעשות EDIT
const ProductEdit = () => {
    const {productId}=useParams()
    const ProductCtx=useContext(ProductContext)
  return (
    <div>ProductEdit</div>
  )
}

export default ProductEdit