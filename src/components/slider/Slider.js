import React, { Component } from 'react'

class Slider extends Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <div>
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={this.props.sliderValue} 
          onChange={this.props.handleChange}
          step="1"/>
          {this.props.sliderValue}
      </div>
    )
  }
}

export default Slider