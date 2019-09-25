import React, { Component } from 'react'

class Slider extends Component {  
  render () {
    return (
      <div>
        <input 
          type="range" 
          min="0" 
          max="1000" 
          value={this.props.value} 
          onChange={this.props.handleChange}
          step="1"/>
          {this.props.value}
      </div>
    )
  }
}

export default Slider