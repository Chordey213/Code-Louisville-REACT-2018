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
            cover: props.path
        };
    }
    render() {
        return (
            <div className="comicThread" >
                {this.props.title + ' ' + 
                this.props.date + ' ' + 
                this.props.creators}
                <img src={this.props.cover} alt = 'broken' />
            </div>
        );
    }
}

export default ComicList;