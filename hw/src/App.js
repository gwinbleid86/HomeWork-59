import React from 'react';
import './App.css';
import MovieListGeneration from "./containers/MovieListGeneration/MovieListGeneration";
import JokeGenerator from "./containers/JokeGenerator/JokeGenerator";

function App() {
  return (
      <div className="App" style={{maxWidth: '1200px', margin: '0 auto', display:'flex'}}>
        <MovieListGeneration/>
        <JokeGenerator/>
      </div>  );
}

export default App;
