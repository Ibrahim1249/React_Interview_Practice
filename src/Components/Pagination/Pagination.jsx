

import React from 'react'

function Pagination({page , setPage}) {
    function handleRight(){
        setPage((prevPage)=> prevPage + 1)
    }
    function handleLeft(){
        setPage((prevPage)=> prevPage - 1)
    }

    const nextThreeNoArr = Array.from({length:4},(_,index) => page + index)
    const prevThreeNoArr = Array.from({length:3} , (_,index) => page - 1 - index ).filter((value)=> value > 0).reverse()
    // 5 - 1 - 0 = 4
    // 5 - 1 - 1 = 3
    // 5 - 1 - 2 = 2
    const paginationArr = [...prevThreeNoArr , ...nextThreeNoArr]
  return (
    <>
      <div className="pagination-container">
        {page > 1 && <div className='btn' onClick={handleLeft}>{"<"}</div>} 
         {paginationArr.map((value,index)=>{
             return <div key={index} onClick={()=>{setPage(value)}} className={value === page ? `btn active` : "btn"}>{value}</div>
         })}
         <div className='btn' onClick={handleRight}>{">"}</div>
      </div>
     
    </>
  )
}

export default Pagination