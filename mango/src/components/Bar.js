import React from 'react';

class Bar extends React.Component {
    render() {
        const value = this.props.barValue;
        const widthValue = value * 100;

        return (
            <div class="bar" style={{width: widthValue}}> {this.props.barValue} </div>
        );
    }
}
export default Bar;
