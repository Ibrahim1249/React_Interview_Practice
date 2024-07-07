
import React from 'react'

function SingleProduct({item}) {
  return (
    <>
      <div className="product">
        <img src={item.image} alt="" />
         <h3>{item.title}</h3>
        <p><span>Category</span> {item.category}</p>
        <p>{item.price}</p>
      </div>
    </>
  )
}

export default SingleProduct