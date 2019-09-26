import React from 'react';
import DropDown from '../components/Shared/Dropdown.js'
// import 'src/components/Home/Home.css';

class Home extends React.Component {
    render() {
      return (
        <div>
              <div id = "homeDiv">
                <p>Home</p>
              </div>
              <div className = "dropdown-container">
                  {/* <DropDown /> */}
              </div>
        </div>
       
      );
    }
}

export default Home;