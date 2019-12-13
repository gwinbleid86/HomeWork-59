import React, {Component} from 'react';
import './Movie.css'
class Movie extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.title !== this.props.title;
    }

    render() {
        return (
            <li>
                <input onChange={this.props.onChange} className="editFilmInput" type="text" value={this.props.title}/>
                <i onClick={this.props.remove}  className="fas fa-times"/>
            </li>
        );
    }
}

export default Movie;