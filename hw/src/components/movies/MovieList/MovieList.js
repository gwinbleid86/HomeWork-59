import React from 'react';
import Movie from "../Movie/Movie";
import './MovieList.css'
const MovieList = ({films, deletefilm, onChange}) => {
    let titleList = films.length !== 0?<p>To watch list:</p>:"";
    return (
        <ul className="listFilms">
            <li>{titleList}</li>
            {films.map(film =>
                <Movie
                    key={film.id}
                    remove={() => deletefilm(film.id)}
                    title={film.title}
                    onChange={(event) => onChange(event, film.id)}
                />
            )}
        </ul>
    );
};

export default MovieList;