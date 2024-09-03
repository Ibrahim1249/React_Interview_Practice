import React from 'react'

function Events({events}) {
  return (
    <>
     {events.map((data)=>{
        const startHour = data.start.split(":")[0];
        const startMin = data.start.split(":")[1];
        const endHour = data.end.split(":")[0];
        const endMin = data.end.split(":")[1]

        const top = startHour * 5 + (startMin / 60) * 5;
        const height = (endHour - startHour ) * 5 + ((endMin - startMin) / 60) * 5;

        return (
            <div className="event" style={{top : `${top}rem` , height : `${height}rem`}}>
               {data.title}
            </div>
        )
     })}
    </>
  )
}

export default Events