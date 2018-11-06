import React, { Component } from 'react';
import './flexbox.css';

class ProfileUI extends Component {
    // constructor() {
    //     super()
    // }
    render() {
        return (
            <div className="profile">
                <div className='item1'>
                    <img className="img" src="https://via.placeholder.com/730x400.png?text=Profile+Image+goes+here" alt="shit" />
                </div>
                <div className='item2'>
                    <h1>Character Name goes here</h1>
                    <br></br>
                    Biogrophy, or some shit
                </div>
                <div className='item3'></div>
                <div className='item4'></div>
            </div>
        );
    };
}

export default ProfileUI;