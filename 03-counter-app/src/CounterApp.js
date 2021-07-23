import React from 'react';
const handledAdd = (e) => {
    console.log(e)
}

const CounterApp = ({ value }) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>
            <button onClick={handledAdd}>+1</button>
        </>
    )
}


CounterApp.ReactPropTypes = {
    value: {}
    }

export default CounterApp;
