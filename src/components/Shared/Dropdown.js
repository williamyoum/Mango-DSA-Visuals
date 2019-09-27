import React from 'react';
import './style.css';
// import Header from '../components/Header.js'
// import Footer from '../components/Footer.js'
// import GraphPage from '../pages/Graph'
// import SortPage from '../pages/Sort'
// import bubbleSort from '../pages/Sort'
//import bubbleSort from './Sort';
// from skptricks
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMenu: false,
        };
        this.showDropdownMenu = this.showDropdownMenu.bind(this);
        this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    };
    showDropdownMenu(event) {
        event.preventDefault();
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('click', this.hideDropdownMenu);
        });
    }
    hideDropdownMenu() {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('click', this.hideDropdownMenu);
        });
    }
    render() {
        return (
            <div id="Algorithm Type">
                <div className="dropdown" style={{ background: "#ffbe32", width: "200px" }} >
                    <div className="button" onClick={this.showDropdownMenu}> Sorting Algos </div>
                    {this.state.displayMenu ? (
                        <ul>
                            <li><a href="./{whatPage}">item1</a></li>
                        </ul>
                    ) :
                        (
                            null
                        )
                    }
                </div>
            </div>

        );
    }
}

export default Dropdown;