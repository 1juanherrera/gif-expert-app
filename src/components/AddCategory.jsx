import { useState } from "react"


const AddCategory = ({ setCategories, categories }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event)  => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        setCategories([ ...categories, inputValue])
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                onChange={onInputChange}
                type="text"
                value={inputValue}
                placeholder="Buscar gifs"
            />
        </form>
    )
}

export default AddCategory