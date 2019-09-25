import React, { Component } from './node_modules/react'

class Slider extends Component {  
  render () {
    return (
      <div>
        <input 
          type="range" 
          min="0" 
          max="1000" 
          value={this.props.sliderValue} 
          onChange={this.provaluechange}
          step="1"/>
          {this.props.sliderValue}
      </div>
    )
  }
}

export default Slider