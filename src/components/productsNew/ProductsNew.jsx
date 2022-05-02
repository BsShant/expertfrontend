import React from 'react'
import './styles.css'
const ProductsNew = (props) => {
    const {image} = props
  return (
    <div className='products-new-container'>
        <img src={image} alt="Product" />
    </div>
  )
}

export default ProductsNew