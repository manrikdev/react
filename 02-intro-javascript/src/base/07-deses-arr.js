const personajes = ['Goku', 'Veget', 'Trunks'];
const [,,p2] = personajes;
console.log(p2);


const retornaArreglo = () => ['ABC', 123];
const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

const userState = (valor) => {
    return [valor, () => { console.log('Hola Mundo') }];
}

const [nombre, setNombre] = userState('Goku');

console.log(nombre);
setNombre();