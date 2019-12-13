import React from 'react';
import './App.css';
import MovieListGeneration from "./containers/MovieListGeneration/MovieListGeneration";

function App() {
  return (
      <div className="App" style={{maxWidth: '1200px', margin: '0 auto', display:'flex'}}>
        <MovieListGeneration/>
        {/*<JokeGenerator/>*/}
      </div>  );
}

export default App;
