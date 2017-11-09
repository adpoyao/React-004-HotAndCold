import React, {Component} from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalToggle: false
        }
        
        this.toggleModal = this.toggleModal.bind(this);
    }
    
    toggleModal() {
        this.setState({modalToggle: !this.state.modalToggle});
    }

    render(){
        let modal;
        if (this.state.modalToggle) {
            modal = <InfoModal toggleModal={this.toggleModal}/>
        }

        return (
            <header>
                <TopNav
                    toggleModal={this.toggleModal} 
                    newGame={this.props.newGame}/>
                    {modal}
                <h1>HOT or COLD</h1>
            </header>
        );
    }
};
