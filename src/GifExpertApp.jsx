import { useState } from "react"
import AddCategory from './components/AddCategory'

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball', 'Naruto'])  

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
                categories.map((category, ) => {
                    return (
                        <li key={category}>{category}</li>
                    )
                })
                }
            </ol>
        </>
    )
}

export default GifExpertApp