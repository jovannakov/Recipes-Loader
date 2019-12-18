import React, {useEffect, useState} from 'react';
import Recipe from "./Recipe";
import './App.css';


const App = () => {

    const API_ID = "91d484c9";
    const API_KEY = "7abf94308cf8b2a63f409bb8888859ae";

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');

    const getRecipies = async () => {
        const response = await fetch(exampleRequest);
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits[0]);
    };

      useEffect(() => {
       console.log("Effect has been run");
          getRecipies();
    },[query]);


    const exampleRequest = `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`;

    const onChangeSearch = event => {
      setSearch(event.target.value);
    };

    const updateQuery = e => {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    };

  return (
      <div className={"App"}>
          <form onSubmit={updateQuery} className="search-form">
              <input type="text" className="search-bar"
                     value={search}
                     onChange={onChangeSearch}/>
              <button type="submit" className="search-button">Submit</button>
          </form>


          <div className="recipes">

              {recipes.map(recipe => (
                  <Recipe
                      key={recipe.recipe.label}
                      title={recipe.recipe.label}
                      calories={recipe.recipe.calories}
                      image={recipe.recipe.image}
                      ingredients={recipe.recipe.ingredients}/>
              ))}

          </div>
      </div>
  );
};


export default App;
