

import React from 'react'
import { useState } from 'react'

function Accordian({obj}) {
    const [show , setShow] = useState(false);
  return (
     <>
       <div className="accordian-container">
          <h3>{obj.question} <span onClick={()=>{setShow(!show)}} >{show ? "-" : "+"}</span></h3>
          {show ? <p>{obj.answer}</p> : ""}
       </div>
     </>
  )
}

export default Accordian