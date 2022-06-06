import React from 'react'
import BackwardCounter from "./BackwardCounter"
import ForwardCounter from "./ForwardCounter"


const Counter = () => {

  return (
    <div className="hooksContainer">
      <h1>Custom hook in requests</h1>
      <div className="containerMid ">
        <BackwardCounter />
        <ForwardCounter />
      </div>
    </div>
  )
}

export default Counter