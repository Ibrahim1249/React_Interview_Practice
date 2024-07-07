
import React from 'react'

function Accordian2({obj , show , setShow}) {
  return (
    <>
     <div className="accordian-container">
          <h3>{obj.question} <span onClick={()=>{setShow(!show)}} >{show ? "-" : "+"}</span></h3>
          {show ? <p>{obj.answer}</p> : ""}
       </div>
    </>
  )
}

export default Accordian2