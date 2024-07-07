import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct';

function Fetching() {

    const [data,setData] = useState([]);
    const [filterApiData , setApiFilterData] = useState([]);
    const [userInput,setUserInput] = useState("");

    const fetchData = async()=>{
          const response = await fetch("https://fakestoreapi.com/products");
          const result = await response.json();
          setData(result);
          setApiFilterData(result)
    
    }

    useEffect(()=>{
       fetchData()
 
    },[])
    

    useEffect(()=>{
       if(userInput === ''){
         setApiFilterData(data)
       }else{
          const filterByName = filterApiData.filter((item,index)=>{
             return item.title.toLowerCase().includes(userInput.toLowerCase())
          })

          setApiFilterData(filterByName)
       }
    },[userInput])

  return (
    <>
      <div className="input">
         <input type="text" placeholder='search product' value={userInput} onChange={(e)=>{setUserInput(e.target.value)}}/>
      </div>
      <div className="main-container">
         {filterApiData && filterApiData.map((item,index)=>{
             return <SingleProduct item={item} key={index} />
         })}
      </div>
    </>
  )
}

export default Fetching