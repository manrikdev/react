// Funicones JS

const saludar = function (nombre) {

    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) => {

    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Pepe'));

const getUser = () =>
({
    uid: 'ABC123',
    username: 'El_papi1502'
});

console.log(getUser())

/* function getUserActive(nombre) {
    return {
        uid: 'ABC123',
        username: 'El_papi1502',
    };
}

const userActive = getUserActive('Fernando');
console.log(userActive);
 */
const userActive = (nombre)=> (
    {
        uid: '1234',
        username: 'La mami',
    }
);

console.log(userActive);

