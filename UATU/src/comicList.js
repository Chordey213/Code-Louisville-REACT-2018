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
        this.handleClick=this.handleClick.bind(this)
    }

    handleClick(event){
        event.preventDefault();
        this.state.itemOnClick(this.state.id);
    }

    render() {
        return (
            <div className="comicThread" >
                {this.props.title + ' ' + 
                this.props.date + ' ' + 
                this.props.creators}
                <img src={this.props.cover} alt = 'broken' onClick={this.handleClick}/>
            </div>
        );
    }
}

export default ComicList;