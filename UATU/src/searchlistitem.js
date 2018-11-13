import React, { Component } from 'react';
import './flexbox.css';

class SearchListItem extends Component {
    constructor(props) {
        super()
        this.state = {
            imagePath: props.img,
            id: props.id,
            itemOnClick: props.click,
            name: props.name
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        this.state.itemOnClick(this.state.id);
    }

    render() {
        return (
            <li className='charItem' key={this.state.id} onClick={this.handleClick}>
                <div className='heroName'>{this.state.name}</div>
                <img className='charImg' key={this.state.imagePath} src={this.state.imagePath} alt="broken" />
            </li>
        );
    }
};

export default SearchListItem;