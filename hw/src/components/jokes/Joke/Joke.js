import React from 'react';
import './Joke.css'

const Joke = ({value}) => {
    return (
        <div className='joke'>
            <p>{value}</p>
        </div>
    );
};

export default Joke;