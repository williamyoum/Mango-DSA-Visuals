import React from 'react';
import Header from './components/Header.js'
import Footer from './components/Footer.js'
import Controls from './components/Controls.js'
import Graph from './components/Graph.js'
import './App.css';
import Slider from './components/slider/Slider.js'
import 'react-rangeslider/lib/index.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    // have the global state here
    // the array to be sorted should be in this global state
    this.state = {
      array: [],
      selectedArraySize: 20
    }

    this.bubbleSort = this.bubbleSort.bind(this);
  }

  componentDidMount() {
    this.setState({
      array: this.shuffleArray(this.createArrayWithRange(250))
    });
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

  async bubbleSort() {
    const array = this.state.array;

    for (let end = this.state.array.length - 1; end > 0; end--) {
      for (let i = 0; i < end; i++) {
        if (array[i] > array[i+1]) {
          let temp = array[i];
          array[i] = array[i+1];
          array[i+1] = temp;
          this.setState({array: array});
        }

        await this.sleep(0)
      }
    }
  }

  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  handleSliderChange(event) {
    console.log(event);
    // this.setState({selectedArraySize: 20});
  }

  render() {
    return (
      <main>
        <Header />
        <div>
            <Slider 
              sliderValue={this.state.selectedArraySize} 
              handleChange={this.handleSliderChange} />
        </div>
        <button onClick={this.bubbleSort}>CLICK</button>
        <section>
          {/* figure out how to call App.js function from Controls.js */}
          <Controls />
          <Graph array={this.state.array} />
        </section>
        <Footer />
      </main>
    );
  }
  // getSliderData () {

  //   const {sliderData} = this.state

  //   fetch(`${baseUrl}v1/bpi/historical/close.json?currency=${sliderData}`)
  //     .then(response => response.json())
  //     .then(historicalData => this.setState({historicalData}))
  //     .catch(e => e)
  // }



}


export default App;