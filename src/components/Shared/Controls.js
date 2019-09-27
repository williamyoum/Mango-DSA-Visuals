import React from 'react';
// import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
// import registerServiceWorker from './registerServiceWorker.js';
import Dropdown from './Dropdown';

// identifySort(){
//   let someSort = this.quickSort
// }

class Controls extends React.Component {
  render() {
    return (
      <div id="parent">
        <div id="prompt">
        </div>
        <div>
          <Dropdown>
            <Dropdown.Item href="#/action-1">Action1</Dropdown.Item>
          </Dropdown>
        </div>
        <button onClick={this.quickSort}>Sort!</button>
        <button onClick={this.shuffleArray}>Let's Shuffle!</button>
      </div>
    );
  }
}

export default Controls;