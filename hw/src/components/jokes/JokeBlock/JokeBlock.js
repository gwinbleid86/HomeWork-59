import React, {Component} from 'react';
import Joke from "../Joke/Joke";
import './JokeBlock.css'
import JokeButton from "../JokeButton/JokeButton";

class JokeBlock extends Component {
    render() {
        return (
            <div className="jokeBlock">
                {this.props.jokes.map(joke =>
                    <Joke
                        key={joke.id}
                        value={joke.value}
                    />
                )}
                <JokeButton newJokes={this.props.newJokes}/>
            </div>
        );
    }
}

export default JokeBlock;