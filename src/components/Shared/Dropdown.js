import React from 'react';
import './style.css';
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
    // take props from Controls.
    render() {
        return (
            <div id="Algorithm Type">
                <div className="dropdown" style={{ background: "#ffbe32", width: "200px" }} >
                    <div className="button" onClick={this.showDropdownMenu}> {this.props.pageType} </div>
                    {this.state.displayMenu ? (
                        <ul>
                            {/* props.sortType */}
                            <li><a href="./sort">{this.props.sortType1}</a></li> {/* bubble sort */}
                            <li><a href="./sort">{this.props.sortType2}</a></li> {/* quick sort */}
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