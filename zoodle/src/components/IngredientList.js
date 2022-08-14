import React from 'react'


export default function IngredientList(props) {
  
  function removeIngredientHandler(id){
    const updatedIngredients = [...props].filter((ingredient) => ingredient.id !== id)
    
  }

  return (
    <ul className='ingredient-list'>
        {props.ingredients.map((ingredient) => {
            return <li key={ingredient.id}><button className='xButton' onClick={() => removeIngredientHandler(ingredient.id)}>x</button> {ingredient.text}</li>
        })}
    </ul>
  )
}