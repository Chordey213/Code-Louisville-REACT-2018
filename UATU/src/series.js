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
        uri = utility.appendParam(uri, 'limit', 3);
        uri = utility.urlWithPublicKey(uri);
        fetch(uri).then(
            data => { return data.json() }
        ).then(data => {
            this.setState({ title: data.data.results[0].title })
            this.setState({ description: data.data.results[0].description })
            this.setState({ startYear: data.data.results[0].startYear })
            this.setState({ type: data.data.results[0].type })
            this.setState({ profileSource: data.data.results[0].thumbnail.path + '.' + data.data.results[0].thumbnail.extension })
        }
        
        )
        this.setState({ Series: Series })
    }

    render() {
        return (
            <div className='series'>
                <table>
                    <th>{this.state.profileSource}</th>
                    <tr className='title'>
                        <td>{this.state.title}</td>
                    </tr>
                    <tr className='description'>
                        <td>{this.state.description}</td>
                    </tr>
                    <tr className='startYear'>
                        <td>
                            {this.state.startYear}
                            {this.state.type}
                        </td>
                    </tr>
                </table>
            </div>
        );
    };
}

export default withRouter(Series);