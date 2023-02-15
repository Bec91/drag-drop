import './AddItemForm.scss'
import React from "react-dom";
import { useState } from 'react';


function AddItemForm() {

    const [userInput, setUserInput] = useState('');

    const handleChange  = (e) => {
        setUserInput(e.currentTarget.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        AddItemForm(userInput)
        setUserInput("")
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                value={userInput}
                type="text"
                onChange={handleChange}
                placeholder = "add item"
            />
            <button>Add</button>
        </form>
    )
}

export default AddItemForm;