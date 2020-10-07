import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GitExpertApp = () => {
    //const categories =['One Punch', 'Samurai X','Dragon Ball']
    const [categories, setCategories] = useState(['One Punch'])

    //const handledAdd = () => { 
    //    setCategories([...categories, 'Sword Art Online'])
    //}
    return (
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories}></AddCategory>
            <hr></hr>
            <ol>
                {
                    categories.map((category, index) =>{
                        return <GifGrid 
                            key =   {category}
                            category= {category}
                            />
                    })
                }
            </ol>
        </>
    )
}
