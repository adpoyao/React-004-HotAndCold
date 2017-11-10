import React, {Component} from 'react';

import './guess-form.css';

export default class GuessForm extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <form onSubmit={this.props.onGuess}>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder="Enter your Guess" required 
                value={this.props.userInput} onChange={event=>this.props.updateUserInput(event)}/>
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
    }
}

