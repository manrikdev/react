import { getHeroeById } from "./base/08-imp-exp";
// import { getHeroesByOwner } from "./base/08-imp-exp";

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         const heroeById = getHeroeById(2);
//         console.log(heroeById);

//         resolve(heroeById)
//     }, 2000)
// });

// promesa.then((heroeById) => {
//     console.log(    'Then de la promesa')
// })

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            const heroeById = getHeroeById(id);
            console.log(heroeById);
            if (heroeById) {

                resolve(heroeById);
            } else {
                reject('No se pudo en contrar al Heroe. ')
            }
        }, 2000)
    });

}

getHeroeByIdAsync(1)
    .then(console.log())
    .catch(console.warn);