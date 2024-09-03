import React from 'react'

function DayTimeSlot() {
    const slots = Array.from({length : 24} , (_,index)=> index);

  return (
   <>
     {slots.map((slot)=>{
         return <div className="slot">
            {slot} : 00
         </div>
     })}
   </>
  )
}

export default DayTimeSlot