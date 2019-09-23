import React from 'react';
import DropDown from '../../dropdownmenu/Dropdown.js'
import './Home.css';
class HomePage extends React.Component {
    render() {
      return (
        <div> 
              <div id = "homeDiv">
                <p>Home Page</p>

              </div>
              <div className = "dropdown-container">
                  <DropDown />
              </div>
        </div>
       
      );
    }
}

export default HomePage;