
import React from 'react'
import Virtualized from './Virtualized'

function VirtualizedList() {
    const LIST = Array.from({length:100000},(_,index)=> index+1)
  return (
    <>
      <Virtualized LIST={LIST} height={500} width={300} itemHeight={35}/>
    </>
  )
}

export default VirtualizedList