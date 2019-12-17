import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


const Recipe = ({title, calories, image}) => {
    return (
        <div className="">
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image} alt=""/>
        </div>
    );
};

export default Recipe;