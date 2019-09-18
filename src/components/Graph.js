import React from 'react';
import Bar from './Bar.js';
import './Graph.css';
class Graph extends React.Component {
    // in controls, have a range of numbers 
    // 1 - 1000... 
    // above array could be generated all the numbers
    // go on app, 1-250... choose and click start
        // app will create arr of 1-250 and shuffle around randomly.. then display bars
        // depending on the sorting algo it will sort it realtime
        // every time it does one op it will update the new state
        // see the visual update

        // create controls for min and max range
        // create buttons for creation of arr
    
    // state is important bc when changes made to state, react knows when changes are made and re-render
    // without you having to tell it to
    // 

    render() {
        return (
            <div>
                {this.props.array.map((value, index) => {
                    return <Bar barValue={value} />
                })}
            </div>
        );
    }
}

export default Graph;