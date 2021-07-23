import React, { useState } from 'react'


const CounterApp = ({ value }) => {
    const [counter, setCounter] = useState(1)

    const handledAdd = () => {
        setCounter(counter + 1)
        // setCounter((c) => c + 1)

    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handledAdd}>+1</button>
        </>
    )
}

CounterApp.ReactPropTypes = {
    value: {}
}

export default CounterApp;
