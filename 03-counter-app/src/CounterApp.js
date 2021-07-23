import React, { useState } from 'react'


const CounterApp = ({ value = 10 }) => {
    const [counter, setCounter] = useState(value)

    const handledAdd = () => setCounter(counter + 1)

    const handledSubtrac = () => setCounter(counter - 1)

    const handledReset = () => setCounter(value)

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={handledAdd}>+1</button>
            <button onClick={handledSubtrac}>-1</button>
            <button onClick={handledReset}>Reset</button>
        </>
    )
}

CounterApp.ReactPropTypes = {
    value: {}
}

export default CounterApp;
