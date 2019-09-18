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
      randomValues: []
    }
  }

  componentDidMount() {
    this.setState({
      randomValues: this.shuffleArray(this.createArrayWithRange(100))
    })
  }

  createArrayWithRange(max) {
    let array = []
    for (let i = 1; i <= max; i++) {
      array.push(i)
    }

    return array;
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
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