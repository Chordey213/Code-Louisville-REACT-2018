import React, { Component } from 'react';
import ProfileUI from './profile.js';
import ComicList from './comicList.js';
import './flexbox.css';
import './specky.css';

class SearchUI extends Component {
    constructor() {
        super()

        this.state = {
            character: '',
            profileSource: '',
            characterName: '',
            biography: ''
        };
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.search = this.search.bind(this);
    }

    handleSearchInput(event) {
        this.setState({
            character: event.target.value
        });
    };
    publicKey() {
        return '5ef86689af1d8abd822d2eeb00844eda'
    };

    appendParam(uriString, paramName, paramValue) {
        if (uriString.includes('?')) {
            return uriString + '&' + paramName + '=' + encodeURI(paramValue);
        } else {
            return uriString + '?' + paramName + '=' + encodeURI(paramValue);
        }
    };
    
    urlWithPublicKey(uriString) {
        uriString=this.appendParam(uriString, 'apikey', this.publicKey());
        return uriString;
    };
    search(event) {
        event.preventDefault();
        var uri='https://gateway.marvel.com:443/v1/public/characters?'
        uri=this.appendParam(uri, 'name', this.state.character);
        uri=this.urlWithPublicKey(uri);
        fetch(uri).then(result=>{return result.json()}).then(data=>{
            this.setState({characterName: data.data.results[0].name})
            this.setState({profileSource: data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension})
            this.setState({biography: data.data.results[0].description})
        })
        
        // takes one mandatory arguement. the path to the resource we want to fetch //
 
    };

    render() {
        return (
            <div>
                <form className="form-wrapper cf">
                    <input type="text" placeholder="Search here..." required value={this.state.character} onChange={this.handleSearchInput} />
                    <button type="submit" onClick={this.search}>Search</button>
                </form>
                <ProfileUI
                    name={this.state.characterName}
                    biography={this.state.biography}
                    profileSource={this.state.profileSource}
                />
                <ComicList />
            </div>
        );
    }
}

export default SearchUI;