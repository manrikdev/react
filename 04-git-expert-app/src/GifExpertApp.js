import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {


    const [categories, setCategories] = useState(['One Punc'])


    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories}></AddCategory>

            <ol>{
                categories.map(category => <GifGrid
                    key={category}
                    category = {category}

                ></GifGrid>
                )
            }
            </ol>
        </>
    )
}

export default GifExpertApp
