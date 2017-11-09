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
            correctAnswer: Math.floor(Math.random() * 100) + 1
        }
        this.showFeedback = this.showFeedback.bind(this);
        this.onGuess = this.onGuess.bind(this);
        this.makeNewGame = this.makeNewGame.bind(this);
    }

    showFeedback(value){
        let difference = value - this.state.correctAnswer;
        difference = Math.abs(difference);
        let feedback;
        console.log('===difference', difference);
        if(difference === '') {
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
        else if(difference >= 1) {
            feedback = "Super Hot!"
        }
        else {
            feedback = "You got it!"
        }
        this.setState({feedback})
    }

    onGuess(event) {
        event.preventDefault();
        let userGuess = event.target.userGuess.value;
        this.setState({
            guess: [...this.state.guess, userGuess]
        });
        this.showFeedback(event.target.userGuess.value);
        userGuess = '';
    }

    makeNewGame() {
        this.setState ({
            feedback: 'Make your guess!',
            guess: [],
            correctAnswer: Math.floor(Math.random() * 100) + 1
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

