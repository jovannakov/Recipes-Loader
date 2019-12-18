import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import style from "./recipe.module.css"


const Recipe = ({title, calories, image, ingredients}) => {
    return (
                <div className={style.recipe}>
                    <h1>{title}</h1>
                    <img src={image} className={style.image} />
                    <br/>
                    <p className={style.calories}><strong>Calories: </strong> {calories}</p>
                    <ol>
                        {ingredients.map(i => (
                            <li className={style.ingredient}>{i.text}</li>
                        ))}
                    </ol>
                </div>
    );
};

export default Recipe;