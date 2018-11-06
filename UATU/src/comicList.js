import React, { Component } from 'react';
import './flexbox.css';

class ComicList extends Component {
    // constructor (){
    //     super()
    // }
    render() {
        return(
            <div className="comicThread" >
                <ul>
                    <li className="comicItem">Comic return #1</li>
                    <li className="comicItem">Comic return #2</li>
                    <li className="comicItem">Comic return #3</li>
                </ul>
            </div>
        );
    }
}

export default ComicList;