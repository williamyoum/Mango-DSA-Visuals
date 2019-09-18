import React from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Controls from './components/Controls.js'
import Graph from './components/Graph.js'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // have the global state here
    // the array to be sorted should be in this global state
    this.state = {
      randomValues: [1,2,4,5,6]
    }
  }

  createArraysWithRange(min, max) {
    // create this.state.randomValues with values between this range
  }

  shuffleArray() {
    // randomize the this.state.randomValues
  }

  render() {
    return (
      <main>
        <Header />
        <section>
          {/* figure out how to call App.js function from Controls.js */}
          <Controls />
          <Graph array={this.state.randomValues} />
        </section>
        <Footer />
      </main>
    );
  }
}

export default App;