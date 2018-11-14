import React, { Component } from 'react';
import './flexbox.css';

class ComicList extends Component {
    constructor(props) {
        super()
        this.state = {
            id: props.id,
            title: props.title,
            date: props.date,
            creators: props.name,
            cover: props.path,
            itemOnClick: props.click
        };
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        event.preventDefault();
        // this.state.itemOnClick(this.state.id);
    }

    render() {
        return (
            <div >
                <div className="comicThread">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.creators}</p>
                    <p>On Sale Date: {this.props.date}</p>
                    <img src={this.props.cover} alt='broken' onClick={this.handleClick} />
                </div>
            </div>
        );
    }
}

export default ComicList;