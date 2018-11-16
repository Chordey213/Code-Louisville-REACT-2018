import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './flexbox.css';



class LineUp extends Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this);
    };

    

    render() {
        return (
            <div className="top" onClick={this.handleClick}>
            </div>
        );
    }
    handleClick() {
        this.props.history.push('/');
    }
}

export default withRouter(LineUp);
