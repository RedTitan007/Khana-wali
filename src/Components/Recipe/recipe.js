import React from 'react'
import './recipe.css'


 const recipe=({title,calories,image,ingredients})=>(//NO BRANCES BECAUSE HERE WE ARE RETURNING HTML
    <div className="Recipe">
        <h1 className="Recipe_title">{title}</h1>
        <div className="image_div">
      <img className="image" src={image} alt=""/>
        </div>
        <p className="calories">Calories:{parseInt(calories)} kcal</p>
        <h2>Ingredients</h2>
        <ul className="Ingredients">
         {
          ingredients.map((ingredient,index)=>(
          <li className="ingredient" key={index}>
            <i className="fas fa-caret-right"/> {ingredient.text}
          </li>
          ))
         }
        </ul>
    </div>
)

export default recipe