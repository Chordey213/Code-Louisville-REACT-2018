import React, { Component } from 'react';
import './App.css';
import giraffe from './image.png';

class App extends Component {
  constructor(props) {
    super()
    this.state = { value: '' };
    this.search = this.search.bind(this); // bind the search field to the search text//
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    fetch('https://api.steampowered.com/ISteamApps/GetAppList/v2/') // Obtains the API data from a fetch call  //
      .then(response => response.json())
      .then(data => this.setState({ data: data })); // stores the data captured from the API fetch call Locally, so that the data does not have to be loaded again //
  } // by passing the fetch from the api into a componentdidmount, we are able to obtain the api result, prior to the user typing anything //

  search(event) {
    this.setState({ value: event.target.value }); //value corresponds to what is typed into search bar//
  };

  //filter the data that is passed in from the API //
  filterSearchResults(data, searchValue) {
    const results = data.filter(function (posotive) {
      return (
        posotive.name.toLowerCase().includes(searchValue.toLowerCase())
      )
    });
    return results;
  }

  // pass the search results into the submit, 
  // and then use the submit to parse over the data from the API 
  // and update a new div on the page with the result //
  submit(event) {
    const filteredResults = this.filterSearchResults( //search the cached API data using the user input //
      this.state.data.applist.apps,
      this.state.value
    );
    let filteredResultsUI = filteredResults.map(function callback(game){
      return (
        <li key={game.appid}> {game.name}</li>
      )
    }) 
    this.setState({ apiResults: filteredResultsUI });

    event.preventDefault();
  };

  render() {
    return (
      <div className="App">
        {/* // Header div // */}
        <div className="App-header" > 
          <img className="" src={giraffe} alt="logo"></img>
          <input className="searchBox" type='text' value={this.state.value} onChange={this.search}></input>
          <input className="btn" type='button' value='submit' onClick={this.submit}></input>
        </div>
        {/* // End of Header div // */}
        <div >
          <ul className='results'>{this.state.apiResults}</ul>
        </div>
      </div>
    );
  }
}

export default App;
