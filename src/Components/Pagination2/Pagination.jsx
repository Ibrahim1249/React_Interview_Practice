
import React from 'react'

function Pagination({page , setPage , totalPage}) {
  const paginationArr = Array.from({length:totalPage},(_,index)=> index )
  function handleRight(){
    setPage((prevPage)=> prevPage + 1)
}
function handleLeft(){
    setPage((prevPage)=> prevPage - 1)
}

  return (
    <>
        <div className="pagination-container">
        {page > 1 && <div className='btn' onClick={handleLeft}>{"<"}</div>} 
         {paginationArr.map((value,index)=>{
             return <div key={index} onClick={()=>{setPage(value)}} className={value === page ? `btn active` : "btn"}>{value + 1}</div>
         })}
         {page < paginationArr.length - 1 && <div className='btn' onClick={handleRight}>{">"}</div> }
      </div>
    </>
  )
}

export default Pagination