import React from 'react';
// import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
// import registerServiceWorker from './registerServiceWorker.js';
import Dropdown from './Shared/Dropdown';

class Controls extends React.Component {
    render() {
      return (
        <div id = "parent">
            <div id = "prompt">
             </div>
             <div>
                <Dropdown>
                 <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action1</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Action2</Dropdown.Item>
                 </Dropdown.Menu>
                </Dropdown>  
             </div>
        </div>
      );
    }
}   

export default Controls;