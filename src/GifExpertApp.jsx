import { useState } from "react"
import AddCategory from './components/AddCategory'
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch'])  

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;

        //categories.push(newCategory)
        setCategories([ newCategory, ...categories ])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <h4>AddCategory</h4>
            <AddCategory 
            //setCategories={setCategories} categories={categories}
            onNewCategory={onAddCategory}
            />
            <ol>
                {
                    categories.map((category) => (
                        <GifGrid key={category} category={category}/>  
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp