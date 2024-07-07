
import React from 'react'

function SingleProduct({product }) {
  return (
    <>
     <div className="products">
         <img src={product.thumbnail} alt="" />
         <p><span>Title :</span>{product.title}</p>
         <p><span>Price : </span>{product.price}</p>
         <p><span>Description :</span>{product.description}</p>
     </div>
    </>
  )
}

export default SingleProduct