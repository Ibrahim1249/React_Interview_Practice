

import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';

function Post() {
    const [page,setPage] = useState(1);
    const [images,setImages] = useState([])
    useEffect(()=>{
         async function fetchData(){
            const data = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=5`);
            const result = await data.json();
             setImages(result)
         }
         fetchData()
    },[page])
  return (
    <>
      <div className="main-container">
         <div className="post-container">
             {images && images.map((item,index)=>{
                 return  <img src={item.download_url} alt="" key={index} loading='lazy'/>
             })}
         </div>
         <Pagination page={page} setPage={setPage}/>
      </div>
    </>
  )
}

export default Post