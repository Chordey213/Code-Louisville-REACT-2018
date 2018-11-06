import React, { Component } from 'react';
import ProfileUI from './profile.js';
import ComicList from './comicList.js'
import './flexbox.css';

class SearchUI extends Component {
    // constructor() {
    //     super()

    // }
    render() {
        return (
            <div >
                <div className="search">
                    <input type="text" src="https://via.placeholder.com/730x400.png?text=SEARCHBOX+goes+here"></input>
                </div>
                <ProfileUI />
                <ComicList />
            </div>
        );
    }
}

export default SearchUI;