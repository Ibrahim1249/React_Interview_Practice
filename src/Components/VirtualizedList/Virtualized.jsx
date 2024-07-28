import React, { useState } from 'react'

function Virtualized({LIST,height,width,itemHeight}) {
    const [indices , setIndices] = useState([0,Math.floor(height / itemHeight)]);
   
    
    function handleScroll(e){
        const {scrollTop} = e.target;
        let newStartIndices = Math.floor(scrollTop / itemHeight);
        let newEndIndices = newStartIndices +  Math.floor(height / itemHeight);
        setIndices([newStartIndices , newEndIndices]);

    }
    const visibleList = LIST.slice(indices[0] , indices[1] + 1);
  return (
    <>
      <div className="container" onScroll={handleScroll} style={{
         height:height,
         width:width,
         overflow:"auto",
         margin:"2rem",
         border:"2px solid red"
      }}>
        <div style={{height: LIST.length * itemHeight , position:"relative"}}>
          {visibleList.map((item,index)=>{
             return <div className='item' style={{
                height:itemHeight,
                width:"100%",
                background: "coral",
                borderTop: "2px solid grey",
                position:"absolute",
                textAlign:"center",
                color:"black",
                top: (indices[0] + index) * itemHeight
             }}>
              {`Item ${item}`}
             </div>
          })}
          </div>
      </div>
    </>
  )
}

export default Virtualized