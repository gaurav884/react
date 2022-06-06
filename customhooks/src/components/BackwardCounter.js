import React from 'react'
import useCounter from "../hooks/useCounter"

const BackwardCounter = () => {
    const counter = useCounter(false);
    return (
        <h2>{counter}</h2>
    )
}

export default BackwardCounter