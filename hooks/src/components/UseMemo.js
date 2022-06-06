import React, { useState, useMemo } from 'react'


const UseMemo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0)


    const verify = useMemo(() => {
        const isEven = counterOne % 2
        for (let i = 0; i < 1000000000; i++) { }
        return isEven

    },[counterOne])

    function counterOneHandler() {
        setCounterOne((prev) => {
            return prev + 1
        }
        )
    }

    function counterTwoHandler() {
        setCounterTwo((prev) => {
            return prev + 1
        })
    }
    return (
        <div className="hooksContainer">
            <h1>useMemo Hook</h1>
            <div className="containerMid useStateContainer">
                <h1>{counterOne} ({verify ? "Odd" : "Even"})</h1>
                <button onClick={() => { counterOneHandler() }}>Change CounterOne</button>
                <h1>{counterTwo}</h1>
                <button onClick={() => { counterTwoHandler() }}>Change CounterTwo</button>

            </div>
        </div>
    )
}

export default UseMemo