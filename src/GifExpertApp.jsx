import { useState } from "react"

const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch', 'Dragon Ball', 'Naruto'])

    console.log(categories)
    

    return (
        <>
            <h1>GifExpertApp</h1>
            <ol>
                {
                categories.map((category) => {
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