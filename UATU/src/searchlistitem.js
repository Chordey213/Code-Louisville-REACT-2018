import React, { Component } from 'react';
import './flexbox.css';

class SearchListItem extends Component {
    constructor(props) {
        super()
        this.state={
            imagePath: props.img,
            id: props.id,
            itemOnClick: props.click
        };
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(event){
        event.preventDefault();
        this.state.itemOnClick(this.state.id);
    }

    render() {
        return (
            <li key={this.state.id} onClick={this.handleClick}>
                <img src={this.state.imagePath} alt="broken" />
            </li>
        );
    }
};

export default SearchListItem;