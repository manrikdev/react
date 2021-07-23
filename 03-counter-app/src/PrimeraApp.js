import React from "react";
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo }) => {


    return (

        <>
            <h1>{saludo}</h1>
            {/* <pre>{JSON.stringify(saludo, null, 2)}</pre> */}
            <p>
                Mi primera aplicación
            </p>

        </>
    )
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}
PrimeraApp.defaultTypes = {
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;