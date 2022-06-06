import React from 'react'
import useGetHTTP from "../hooks/useGetHTTP"
const Requests = () => {

    const posts =useGetHTTP();

    console.log(posts)
  return (
    <div className="hooksContainer">
    <h1>Custom hook in counters</h1>
    <div className="containerMid ">
      
    </div>
  </div>
  )
}

export default Requests