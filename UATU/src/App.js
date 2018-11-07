import React, { Component } from 'react';
import './flexbox.css';
import SearchUI from './searchUI.js';
import Lineup from './lineup.js';

// MVP A Marvel character and comic book search page, like google but for Marvel comics //

class App extends Component {
    constructor(props) {
        super()
        this.state = {
            character: []
        };
        // findToon = () => this.state.characters.path; // Method to change the picture of Uatu whenever a characters thumbnail is loaded from the search // 
        // toonNotFound = () => For when nothing is returned //
    }

    render() {
        return (
            <div className="container"> {/* Beginning of Container Div*/}
                <div>
                    <Lineup />
                </div>
                <div>
                    <SearchUI />
                </div>
            </div> /*End of Container Div*/
        );
    }
}

export default App;
