import React, { Component } from 'react'
import Bar from '../components/Bar.js'
// import Controls from '../components/Controls.js'

class Graph extends Component {  
    render() {
        return (
            <div className="graph-container">
                    {this.props.array.map((value, index) => {
                        return <Bar key={index}
                            value={value}
                            totalElements={this.props.array.length} />
                    })}

                    <div>Graph</div>
                <Bar />
                {/* <Controls /> */}
            </div>
              
            
        )
    }
}

export default Graph;