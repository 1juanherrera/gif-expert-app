import { useState } from "react"
import PropTypes from 'prop-types'

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit = (event)  => {
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;

        onNewCategory( inputValue.trim() );
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit} aria-label="form">
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

AddCategory.PropTypes = {
    onNewCategory: PropTypes.func.isRequired,
}