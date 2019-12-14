import React, {Component} from 'react';
import Button from "../../UI/Button/Button";


class JokeButton extends Component {
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return false;
    }
    render() {
        return (
            <div>
                <Button type="OrderButton" label="New jokes" onClick={this.props.newJokes}/>
            </div>
        );
    }
}

export default JokeButton;