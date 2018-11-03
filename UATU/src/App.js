import React, { Component } from 'react';
import './App.css';
import './img/uatu1.jpg';
// MVP A Marvel character and comic book search page, like google but for Marvel comics //
class App extends Component {
  constructor(props) {
    super()

  //   state = {
  //     characters: [
  //       {
  //         name: '',
  //         description: '',
  //         thumbnail: {
  //           path: "",
  //           extension: ""
  //         }
  //       }
  //     ]
  //   }

  
  // findToon = () => this.state.characters.path; // Method to change the picture of Uatu whenever a characters thumbnail is loaded from the search // 

  }
  render() {
    return (
      <table className="uatu">
        <tbody>
          <tr className="top">
            {/* // Left hand side of page is Uatu the watcher (picture) // */}
            <td rowSpan="2" className="one">
              <img className="img" src="https://via.placeholder.com/200x350.png?text=UATU+goes+here" alt="shit"></img>
            </td>

            {/* // Top of the page is the Marvel character lineup image // */}
            <td colSpan="2">
              <img className="img" src="https://via.placeholder.com/780x100.png?text=Marvel+Banner+goes+here" alt="shit"></img>
            </td>
          </tr>

          <tr>
            {/* // main page content is a search bar, with a description of what you can do // */}
            <td className="two">
              <img className="img" src="https://via.placeholder.com/730x400.png?text=SEARCH+goes+here" alt="shit"></img></td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default App;
