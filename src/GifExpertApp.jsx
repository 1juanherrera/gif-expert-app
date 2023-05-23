import { useState } from "react"
import AddCategory from './components/AddCategory'
import GifGrid from "./components/GifGrid"

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['Dragon ball'])  

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) ) return;

        //categories.push(newCategory)
        setCategories([ newCategory, ...categories ])
    }

    return (
        <>
            <h1>GifApp</h1>
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