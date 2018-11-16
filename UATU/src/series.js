import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './flexbox.css';

/* returns the series of the comics, based off of the Character ID pulled from the first wsearch */

class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            SeriesUI: this.generateLoadingUI()
        };
    }

    componentDidMount(event) {
        this.getSeries();
    }

    generateLoadingUI() {
        return (
            <div className='Loading'>
                <h1>Loading . . .</h1>
            </div>
        )
    };

    getSeries() {
        var utility = require('./utility.js')
        var uri = 'https://gateway.marvel.com:443/v1/public/characters/' + this.state.id + '/series'
        uri = utility.appendParam(uri, 'limit', 100);
        uri = utility.urlWithPublicKey(uri);
        var GenerateComicUI = this.generateComicUI;
        fetch(uri).then(
            data => { return data.json() }
        ).then(data => {
            var SeriesUI = data.data.results.map(function callback(series) {
                return (
                    GenerateComicUI(
                        series.title,
                        series.description,
                        series.startYear,
                        series.type,
                        series.thumbnail.path + '.' + series.thumbnail.extension
                    )
                );
            }
            );
            this.setState({ SeriesUI: SeriesUI })
        }
        );



    }

    generateComicUI(title, desc, startYear, type, profSrc) {
        return (
            <div className='series' >
                <ul >
                    <li >
                        <h1>{title}</h1>
                        <p>
                            {desc}
                            {startYear}
                            {type}
                        </p>
                        <img src={profSrc} alt='broken'></img>
                    </li>
                </ul>
            </div>
        );
    };

    render() {
        return (
            <div>
                {this.state.SeriesUI}
            </div>
        );
    };
}

export default withRouter(Series);