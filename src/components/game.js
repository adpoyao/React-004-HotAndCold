import React, {Component} from 'react';

import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';

export default class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: 'Make your guess!',
            count: 3, 
            guess: [10, 15, 25],
            correctAnswer: 5
        }
    }

    render() {
        return (
        <div>
            <Header />
            <GuessSection feedback={this.state.feedback} />
            <GuessCount count={this.state.count} />
            <GuessList guesses={this.state.guess} />
        </div>
    );
    }
}

