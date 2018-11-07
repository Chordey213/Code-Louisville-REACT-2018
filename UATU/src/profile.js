import React from 'react';
import './flexbox.css';

function ProfileUI(props) {
    return (
        <div className="profile">
            <div className='item1'>
                <img className="img" src={props.profileSource} alt={props.name} />
            </div>
            <div className='item2'>
                <h1>{props.name}</h1>
                <br></br>
                {props.biography}
            </div>
            <div className='item3'></div>
            <div className='item4'></div>
        </div>
    );
};

export default ProfileUI;