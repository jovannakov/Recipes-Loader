import React from 'react';
import logo from './logo.svg';
import './App.css';


const App = () => {

    const API_ID = "91d484c9";
    const API_KEY = "7abf94308cf8b2a63f409bb8888859ae";

    const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`;

  return (
      <div className={"App"}>
          <form className="search-form">
              <input type="text" className="search-bar"/>
              <button type="submit" className="search-button">Submit</button>
          </form>
      </div>
  );
};


export default App;
