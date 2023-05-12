import { useState } from "react"


const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event)  => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );
        //setCategories([ ...categories, inputValue])
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