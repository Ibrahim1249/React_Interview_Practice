import React from 'react'
import DayTimeSlot from './DayTimeSlot'
import events from "./event.json"
import Events from './Events'
import "./google.css"
function DayView() {
  return (
    <>
     <div className="calender">
        <div className="line"></div>
        <DayTimeSlot/>
        <Events events={events} />
     </div>
    </>
  )
}

export default DayView