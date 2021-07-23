const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direcion: {
        ciudad: 'Nueva York',
        cp: 123456,
        lat: 14.25,
        lng: 34.258,
    }
};
const persona2 = { ...persona };
persona2.nombre = 'Amparo'; 
persona2.direcion.ciudad = 'Castellon'; 
console.table({ persona });
console.table({ persona2 });