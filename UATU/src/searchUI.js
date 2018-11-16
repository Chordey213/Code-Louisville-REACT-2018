import React, { Component } from 'react';
import SearchListItem from './searchlistitem';
import { withRouter } from 'react-router-dom';
import './flexbox.css';
import './specky.css';

class SearchUI extends Component {
    constructor(props) {
        super(props)

        this.state = {
            character: this.props.match.params.name,
            profileSource: '',
            characterName: '',
            biography: ''
        };
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.search = this.search.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(event) {
        this.getCharSearch();
    };

    handleSearchInput(event) {
        this.setState({
            character: event.target.value
        });
    };

    search(event) {
        this.props.history.push('/search/' + this.state.character);
    };

    notFound() {
        return (
            <div className='notFound'>
                <h1>Sorry, {this.state.character} does not exist.</h1>
            </div>
        )
    };

    /* returns a list of characters based off of the search input */
    getCharSearch() {
        var utility = require('./utility.js')
        var uri = 'https://gateway.marvel.com:443/v1/public/characters?'
        uri = utility.appendParam(uri, 'nameStartsWith', this.state.character);
        uri = utility.urlWithPublicKey(uri);
        fetch(uri).then(result => { return result.json() }).then(data => {
            var test = this.handleClick;
            if (data.data.count > 0) {
                var charResultUI = data.data.results.map(function callback(character) {
                    return (
                        <SearchListItem
                            id={character.id}
                            name={character.name}
                            img={character.thumbnail.path + '.' + character.thumbnail.extension}
                            click={test}
                        />
                    )
                });
                this.setState({ heroes: charResultUI })
            } else {
                this.setState({ heroes: this.notFound() })
            }
        });
    }

    // take the Character ID returned from the results array and store it --done
    // create a button that runs the second fetch call, to display comics based off of the Id
    // return the comics listed to the Comic list element

    handleClick(id) {
        this.props.history.push('/profile/' + id);
    }

    render() {
        return (
            <div className='searchBar'>
                <div className='legal' >Data provided by Marvel. © 2018 Marvel </div>
                <form className="form-wrapper cf">
                    <input type="text" placeholder="Search here..." required value={this.state.character} onChange={this.handleSearchInput} />
                    <button type="submit" onClick={this.search}>Search</button>
                </form>
                <ul className="heroes">
                    <div className='Returns'>{this.state.heroes}</div>
                </ul>
            </div>
        );
    }
}

export default withRouter(SearchUI);