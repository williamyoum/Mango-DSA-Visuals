import React, { Component } from 'react'
import Bar from '../components/Bar.js'
import Controls from '../components/Controls.js'

class Graph extends Component {  
    render() {
        return (
            <div> 
                <div>Graph</div>
                <Bar />
                <Controls />
            </div>
        )
    }
}

export default Graph;