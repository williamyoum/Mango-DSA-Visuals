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
    constructor() {
        super();
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
            // try to implement a drop down within a drop down
            // subitems
            // drop down list for sorting algo + graphing algos...
            // sorting algos:
                // bubble sort
                // quick sort
            // graphing algos:
                    // etc.
            
            // routes
            // <Route path="/" exact component={SortPage} />
            // <Route path="/graph/" component={GraphPage} />

            <div id="Algorithm Type">
                <div className="dropdown" style={{ background: "#ffbe32", width: "200px" }} >
                    <div className="button" onClick={this.showDropdownMenu}> Sorting Algos </div>
                    {this.state.displayMenu ? (
                        <ul>
                            <li><a href="./Sorting">Sorting Algorithms</a></li>
                            <li><a href="./Graph">Graphing Algorithms</a></li>
                            
                        </ul>
                    ) :
                        (
                            null
                        )
                    }
                </div>

                {/* <div id="Graph Algos">
                    <div className="dropdown" style={{ background: "#ffbe32", width: "200px" }} >
                        <div className="button" onClick={this.showDropdownMenu}> Graphing Algos </div>
                        {this.state.displayMenu ? (
                            <ul>
                                <li><a href="#Bubble Sort">DFS</a></li>
                                <li><a href="#Quick Sort">BFS</a></li>
                            </ul>
                        ) :
                            (
                                null
                            )
                        }
                    </div></div> */}


            </div>

        );
    }
}

export default Dropdown;