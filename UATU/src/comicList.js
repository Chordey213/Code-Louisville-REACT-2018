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
                <ul>
                    <li>
                        {this.props.title}
                        {this.props.date}
                        {this.props.creators}
                        {this.props.cover}
                    </li>
                </ul>
            </div>
        );
    }
}

export default ComicList;