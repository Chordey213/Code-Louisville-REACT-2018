import React, { Component } from 'react';
import './App.css';
import './img/uatu1.jpg';
// MVP A Marvel character and comic book search page, like google but for Marvel comics //
class App extends Component {
  constructor(props) {
    super()
    // state = [];

  }
  render() {
    // Left hand side of page is Uatu the watcher (picture) 
    // Top of the page is the Marvel character lineup image
    // main page content is a search bar, with a description of what you can do

    return (
      <table className="uatu">
        <tbody>
          <tr className="top">
            <td rowSpan="2" className="one"><img className="img" src="https://via.placeholder.com/100x350.png?text=UATU+goes+here" alt="shit"></img></td>
            <td colSpan="2"><img className="img" src="https://via.placeholder.com/780x100.png?text=Marvel+Banner+goes+here" alt="shit"></img></td>
          </tr>
          <tr>
            <td className="two"><img className="img" src="https://via.placeholder.com/730x400.png?text=SEARCH+goes+here" alt="shit"></img></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;
