import { useState } from "react"


const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One punch')

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event)  => {
        event.preventDefault();
        console.log(inputValue)
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                onChange={onInputChange}
                type="text"
                value={inputValue}
                placeholder="Buscar gifs"
            />
            <button>agregar</button>
        </form>
    )
}

export default AddCategory