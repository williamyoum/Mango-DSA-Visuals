import React from 'react';
// import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
// import registerServiceWorker from './registerServiceWorker.js';

class Controls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
};
  render() {
    return (
      <div id="parent">
        <button onClick={this.props.someSort}>Sort!</button>
        <button onClick={this.props.shuffleInSort}>Shuffle!</button>
      </div>
    );
  }
}

export default Controls;