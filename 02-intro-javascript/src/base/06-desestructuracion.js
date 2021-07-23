const person = {
    name: 'Toni',
    age: 23,
    key: 'Iroman',

};

const useContext = ({ name, age, key }) => {
    // console.log(name, age,);
    return {
        keyName: key,
        years: age,
    }

}

const { keyName, age } = useContext(person);
console.log(keyName, age);