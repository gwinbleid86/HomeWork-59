import React, {Component} from 'react';
import Button from "../../UI/Button/Button";
import './InputForm.css';

class MovieInputForm extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return nextProps.isMovieTitleEntered || this.props.isMovieTitleEntered;
    }
    render() {
        return (
            <div>
                <input id="addMovie" type='text' placeholder="Enter film name" onChange={this.props.onChange}/>
                <Button label="Add" type="OrderButton" disabled={!this.props.isMovieTitleEntered} onClick={this.props.onClick}/>
            </div>
        );
    }
}

export default MovieInputForm;