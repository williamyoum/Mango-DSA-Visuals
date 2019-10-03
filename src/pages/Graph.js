import React, { Component } from 'react'
import Dropdown from '../components/Shared/Dropdown'

class Graph extends Component {
    render() {
        return (

            <div> 
                <Dropdown pageType = "Graphing Algo's" sortType1 = "BFS" sortType2 = "DFS"/>
            </div>

        )
    }
}
export default Graph;