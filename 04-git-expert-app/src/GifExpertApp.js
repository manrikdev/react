import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

const GifExpertApp = () => {
    
    // const categories = ['One Punc', 'Samurai', 'Dragon Ball'];
    
    const [categories, setCategories] = useState(['One Punc', 'Samurai', 'Dragon Ball'])

    const handleAdd = () => {
         setCategories(['categories', ...categories])   
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory></AddCategory>

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>{
                categories.map(category => {
                    return (
                        <li key={category} > {category}</li>
                    )
                })
            }
            </ol>
        </>
    )
}

export default GifExpertApp
