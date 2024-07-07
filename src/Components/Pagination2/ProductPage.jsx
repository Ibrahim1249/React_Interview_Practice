

import React, { useEffect, useState } from 'react'
import Pagination from './Pagination'
import SingleProduct from "./SingleProduct"

function ProductPage() {
    const [page,setPage] = useState(0);
    const [product,setProduct] = useState([]);
    const [filterProduct,setFilterProduct] = useState([]);
    const [totalPage ,setTotalPage] = useState(0);
    const [userInput,setUserInput] = useState("")
    const LIMIT =10;
     
    function filterData(){
        if(userInput === ''){
            setFilterProduct(product);
        }else{
            const filterArray = filterProduct.filter((prd,index)=>{
                 return prd.title.toLowerCase().includes(userInput.toLowerCase());
            })
            setFilterProduct(filterArray)
        }
    }

    async function fetchData(){
        const response = await fetch(`https://dummyjson.com/products?limit=10&skip=${LIMIT * page}&select=title,thumbnail,category,description,price`)
        const results = await response.json();
        setFilterProduct(results.products);
        setProduct(results.products);
        
        setTotalPage(Math.ceil(results.total / 10))
      
     }

     useEffect(()=>{
        fetchData()
     },[page])
     useEffect(()=>{
        filterData()
     },[userInput])
  
   
  return (
    <>
      <div className="product-page">
          <input type="text" placeholder='search product ...' value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>

          <h3>Product</h3>

          <div className="display-product">
              {filterProduct && filterProduct.map((product , index)=>{
                 return <SingleProduct product={product} key={index} />
              })}
          </div>

          <Pagination page={page} setPage={setPage} totalPage={totalPage}/>
      </div>
    </>
  )
}

export default ProductPage