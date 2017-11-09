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
            guess: [],
            correctAnswer: 5
        }
        this.showFeedback = this.showFeedback.bind(this);
        this.onGuess = this.onGuess.bind(this);
        this.makeNewGame = this.makeNewGame.bind(this);
    }

    showFeedback(value){
        let difference = value - this.state.correctAnswer;
        difference = difference.isInteger();
        let feedback;
        if(difference = '') {
            feedback = 'Make your guess!';
        }
        else if(difference >= 50) {
            feedback = "Ice Cold"
        }
        else if(difference >= 30) {
            feedback = "Cold"
        }
        else if(difference >= 10) {
            feedback = "Warm"
        }
        else if(difference >= 2) {
            feedback = "Super Hot!"
        }
        else {
            feedback = "You got it!"
        }
        this.setState({feedback})
    }

    onGuess(event) {
        event.preventDefault();
        this.setState({
            guess: [...this.state.guess, event.target.userGuess.value]
        })
    }

    makeNewGame() {
        this.setState ({
            feedback: '',
            count: 0, 
            guess: [10, 15, 25],
            correctAnswer: 5
        })
    }

    render() {
        return (
        <div>
            <Header newGame={this.makeNewGame}/>
            <GuessSection onGuess={this.onGuess} feedback={this.state.feedback}/>
            <GuessCount count={this.state.guess.length} />
            <GuessList guesses={this.state.guess} />
        </div>
    );
    }
}

