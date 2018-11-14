import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './flexbox.css';

class Series extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            series: []
        };
    }

    componentDidMount(event) {
        this.getSeries();
    }

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
        <div className='series'>
            <table>
                <th><img src={profSrc} alt='broken'></img></th>
                <tr className='title'>
                    <td>{title}</td>
                </tr>
                <tr className='description'>
                    <td>{desc}</td>
                </tr>
                <tr className='startYear'>
                    <td>
                        {startYear}
                        {type}
                    </td>
                </tr>
            </table>
        </div>
    );
};

render() {
    return (
            <div>{this.state.SeriesUI}</div>
        );
};
}

export default withRouter(Series);