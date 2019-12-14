import React, {Component} from 'react';
import JokeBlock from "../../components/jokes/JokeBlock/JokeBlock";

class JokeGenerator extends Component {
    state = {
        jokes: []
    };

    async jokesGenerations(how){
        const promiseArray = [];
        for(let i = 0; i < how; i++){
            const response = await fetch("https://api.chucknorris.io/jokes/random");
            if (response.ok){
                promiseArray.push(response);
            }
        }
        let jokes = await Promise.all(promiseArray.map(function (some) {
            return some.json();
        }));
        this.setState({jokes});
    };

    async componentDidMount() {
        this.jokesGenerations(1);
    }

    render() {
        return (
            <div style={{width:'48%'}}>
                <JokeBlock jokes={this.state.jokes} newJokes={()=>this.jokesGenerations(5)}/>
            </div>
        );
    }
}

export default JokeGenerator;