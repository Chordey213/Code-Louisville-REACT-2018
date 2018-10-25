import React, { Component } from 'react';
import './App.css';
import giraffe from './image.png';

class App extends Component {
constructor (props) {
  super()
  this.state = {value: ''};
  this.search = this.search.bind(this); // bind the search field to the search text//
  this.submit = this.submit.bind(this);
}
   search(event) {
     this.setState({value: event.target.value});
   };

   submit(event) {
     alert('FUCK YEAH ' + this.state.value)
     event.preventDefault();
   };

  render() {
    return (
      <div className="App">
        <div className="App-header" >
          <img src={giraffe} alt="logo"></img>
        </div>
        <div>
          <input type='text' value={this.state.value} onChange={this.search}></input>
          <input type='button' value='submit' onClick={this.submit}></input>
        </div>
      </div>
    );
  }
}

export default App;
