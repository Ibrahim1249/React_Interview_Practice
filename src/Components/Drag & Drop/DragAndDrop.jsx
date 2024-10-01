import React, { useRef, useState } from 'react'

function DragAndDrop({initialData}) {
    const [data , setData] = useState(initialData)
    const dragItem = useRef();
    const dragContainer = useRef()

    const handleDragStart = (e, item , container)=>{
        dragItem.current = item;
          dragContainer.current = container
         e.target.style.opacity = "0.5";
    }
    const handleDragEnd = (e)=>{
         e.target.style.opacity = "1";
    }
    const handleDrop = (e , targetContainer)=>{
         const item = dragItem.current;
         const sourceContainer = dragContainer.current;
         setData((prev)=>{
            const newData = {...prev};
            newData[sourceContainer] = newData[sourceContainer].filter((i)=> i!= item);
            newData[targetContainer] = [...newData[targetContainer], item]
            return newData;
         })
    }
    const handleDragOver = (e)=>{
        e.preventDefault()
    }
  return (
   <>
     <div className='start-container'>
       {Object.keys(data).map((container , index)=>{
           return <div key={index} className='drag-container' onDrop={(e)=>{handleDrop(e, container)}} onDragOver={handleDragOver}>

             <h2>{container}</h2>
             {data[container].map((item ,idx)=>{
                return <div key={idx} className='drag-item' draggable onDragStart={(e)=>{handleDragStart(e , item , container)}}
                             onDragEnd={(e)=>handleDragEnd(e)}
                >
                    
                    {item}</div>
             })}
           </div>
       })}
     </div>
   </>
  )
}

export default DragAndDrop