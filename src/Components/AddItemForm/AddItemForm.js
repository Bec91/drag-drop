import './AddItemForm.scss'
import React from "react-dom";
import { useState } from 'react';

let nextId = 0;

function AddItemForm() {

    const [userInput, setUserInput] = useState('');
    const [items, setItems] = useState([]);

    function handleClick() {
        const insertAt= 0
        const nextItems = [
            ...items.slice(0, insertAt),
            {id: nextId++, userInput: userInput},
            ...items.slice(insertAt)
        ];
        setItems(nextItems);
        setUserInput('')

    }

    return (
        <>
            <input 
                value={userInput}
                onChange={e => setUserInput(e.target.value)}
                placeholder = "add item"
                className='form__container'
            />
            <button onClick={handleClick} className='form__button'>
                Add
            </button>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.userInput}{' '}
                        <button onClick={ () => {
                            setItems(
                                items.filter(i => 
                                    i.id !== item.id)
                            )
                        }}>
                            X
                        </button>
                    
                    </li>
                ))}
            </ul>
        </>
    )
}

export default AddItemForm;