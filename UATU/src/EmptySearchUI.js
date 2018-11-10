import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import './flexbox.css';
import './specky.css';

class EmptySearchUI extends Component {
    constructor(props) {
        super(props)

        this.state = {
            character: this.props.match.params.name,

        };
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.search = this.search.bind(this);
    }
    
    

    handleSearchInput(event) {
        this.setState({
            character: event.target.value
        });
    };

    search(event) {
        event.preventDefault();
        this.props.history.push('/search/'+this.state.character);
    }
       
    render() {
        return (
            <div>
                <form className="form-wrapper cf">
                    <input type="text" placeholder="Search here..." required value={this.state.character} onChange={this.handleSearchInput} />
                    <button type="submit" onClick={this.search}>Search</button>
                </form>
            </div>
        );
    };
}

export default withRouter(EmptySearchUI);