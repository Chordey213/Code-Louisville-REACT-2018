import React, { Component } from 'react';
import ComicList from './comicList.js'
import './flexbox.css';

class ProfileUI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            comiclistUI: []
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount(event) {
        this.getCharacter();
        this.getComics();
    }

    getCharacter() {
        var utility = require('./utility.js')
        var uri = 'https://gateway.marvel.com:443/v1/public/characters/' + this.state.id
        uri = utility.urlWithPublicKey(uri);
        fetch(uri).then(
            data => { return data.json() }
        ).then(data => {
            this.setState({ name: data.data.results[0].name })
            this.setState({ biography: data.data.results[0].description })
            this.setState({ profileSource: data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension })
        }
        )
    }


    getComics() {
        var utility = require('./utility.js')
        var uri = 'https://gateway.marvel.com:443/v1/public/characters/' + this.state.id + '/comics'
        uri = utility.appendParam(uri, 'format', 'comic');
        uri = utility.appendParam(uri, 'formatType', 'comic');
        uri = utility.appendParam(uri, 'limit', 3);
        uri = utility.urlWithPublicKey(uri);
        fetch(uri).then(data => { return data.json() }).then(data => {
            var comiclistUI = data.data.results.map(function callback(comic) {
                var creatorName = '';
                if (comic.creators.available > 0) { creatorName = comic.creators.items[0].name }
                return (
                    <ComicList
                        title={comic.title}
                        date={comic.dates[0].date}
                        creators={creatorName}
                        cover={comic.thumbnail.path + '.' + comic.thumbnail.extension}
                    />
                );
            })
            this.setState({ comiclistUI: comiclistUI })
        });
    };

    handleClick(id) {
        this.props.history.push('/series/' + id);
    }

    render() {
        return (
            <div className="profile">
                <div className='item1'>
                    <img className="img" src={this.state.profileSource} alt={this.state.name} />
                </div>
                <div className='item2'>
                    <h1>{this.state.name}</h1>
                    <br></br>
                    {this.state.biography}
                </div>
                {this.state.comiclistUI}
            </div>
        );
    };
}

export default ProfileUI;