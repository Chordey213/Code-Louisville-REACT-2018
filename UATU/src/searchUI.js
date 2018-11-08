import React, { Component } from 'react';
import ProfileUI from './profile.js';
import ComicList from './comicList.js';
import SearchListItem from './searchlistitem';
// import utility from './utility.js';
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
        uriString = this.appendParam(uriString, 'apikey', this.publicKey());
        return uriString;
    };

    search(event) {
        event.preventDefault();
        var uri = 'https://gateway.marvel.com:443/v1/public/characters?'
        uri = this.appendParam(uri, 'nameStartsWith', this.state.character);
        uri = this.urlWithPublicKey(uri);
        fetch(uri).then(result => { return result.json() }).then(data => {
            this.setState({ characterName: data.data.results[0].name })
            this.setState({ profileSource: data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension })
            this.setState({ biography: data.data.results[0].description })
            var test= this.getComics;
            var charResultUI = data.data.results.map(function callback(character) {
                return (
                    <SearchListItem
                        id={character.id}
                        img={character.thumbnail.path + '.' + character.thumbnail.extension}
                        click={test}
                        
                    />
                )
            });
            this.setState({ heroes: charResultUI })
        });
    }

    // take the Character ID returned from the results array and store it --done
    // create a button that runs the second fetch call, to display comics based off of the Id
    // return the comics listed to the Comic list element



    getComics(id) {
        var utility = require('./utility.js')
        var uri = 'https://gateway.marvel.com:443/v1/public/characters/'+ id +'/comics'
        uri = utility.appendParam(uri, 'format', 'comic');
        uri = utility.appendParam(uri, 'formatType', 'comic');
        uri = utility.appendParam(uri, 'limit', 3);
        uri = utility.urlWithPublicKey(uri);
        fetch(uri).then(
            data => { return data.json() }
        ).then(
            data => {
                data.data.results.map(function callback(comic) {
                    return (
                        <ComicList
                            title={comic.title}
                            date={comic.dates[0].date}
                            creators={comic.creators.items[0].name}
                            cover={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                        />
                    );
                })
            }
        )
    }

    render() {
        return (
            <div>
                <form className="form-wrapper cf">
                    <input type="text" placeholder="Search here..." required value={this.state.character} onChange={this.handleSearchInput} />
                    <button type="submit" onClick={this.search}>Search</button>
                </form>
                <ul className="heroes">
                    {this.state.heroes}
                </ul>
                {/* <ProfileUI
                        name={this.state.characterName}
                        biography={this.state.biography}
                        profileSource={this.state.profileSource}
                    /> */}
                <ComicList

                />
            </div>
        );
    }
}

export default SearchUI;