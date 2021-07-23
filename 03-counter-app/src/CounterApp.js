import React from 'react';

const CounterApp = ({ value }) => {
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{value}</h2>

        </>
    )
}


CounterApp.ReactPropTypes = {
    value: {}
}

export default CounterApp;
