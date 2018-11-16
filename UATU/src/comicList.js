import React, { Component } from 'react';
import './flexbox.css';

/* builds the list of comics, based off of the returned results from the Third API call. 
Returns are based off of the Character ID returned from the First API call */

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