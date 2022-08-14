import React, {useState} from 'react'

export default function NewIngredient(props) {
    const [enteredIngredient, setEnteredIngredient] = useState('');

    const addIngredientHandler = event =>{
        event.preventDefault();

        const newIngredient = {
            id: Math.random().toString(),
            text: enteredIngredient
        }
        console.log(newIngredient)

        setEnteredIngredient('');

        props.onAddIngredient(newIngredient);
    };
  
    const textChangeHandler = event => {
        setEnteredIngredient(event.target.value);
    }

    return (
    <form className='new-ingredient-form' onSubmit={addIngredientHandler}> 
        <input type="text" className='ingredient-input-bar' value={enteredIngredient} onChange={textChangeHandler}/>
        <button type='submit' className='add-ingredient-button'>Add Ingredient</button>
    </form>
  )
}
