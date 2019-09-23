import React from 'react';
import DropDown from '../dropdownmenu/Dropdown.js'

class HomePage extends React.Component {
    render() {
      return (
        <div> 
              <div id = "homeDiv">
                <p>This is the home page</p>

              </div>
              <div>
                  <DropDown />
              </div>
        </div>
       
      );
    }
}

export default HomePage;