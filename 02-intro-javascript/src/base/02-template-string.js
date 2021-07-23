const nombre = 'jordi';
const surname = 'manrique';

//const fullName = ` Hola Mundo `;
const fullName = ` ${nombre} ${surname} `;

console.log(fullName);

function getSaludo(nombre) {
    return `Hola ` + nombre
}
console.log(`Este es un texto:  ${getSaludo(fullName)}`);