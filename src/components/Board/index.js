import React, { Component } from 'react';
import './board.css';

class Board extends Component {
    boardStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: 20
    }

    rowStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }

    constructor(props) {
        super(props);
        this.state = {
            xCells: 10,
            yCells: 6,
            startCell: []
        }
        this.setStartCell = this.setStartCell.bind(this);
    }

    setStartCell(x, y) {
        const startCell = [x, y]
        this.setState({
            startCell: startCell
        })
    }

    render() {
        return (
            <div style={this.boardStyle}>

                {Array.from(Array(this.state.yCells), (_, x) => {
                    return <div key={x} style={this.rowStyle}>
                        {Array.from(Array(this.state.xCells), (_, y) => {
                            return <Cell
                                key={y}
                                x={x}
                                y={y}
                                isStartCell={this.state.startCell[0] === x && this.state.startCell[1] === y}
                                setStartCell={this.setStartCell} />
                        })}
                    </div>
                })}
                <div style={this.rowStyle}>

                </div>
            </div>
        )
    }
}

export default Board


class Cell extends Component {
    cellStyle = {
        width: '50px',
        height: '50px',
        border: '1px solid black'
    }

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
        }
    }

    componentDidMount() {
        this.setState({
            x: this.props.x,
            y: this.props.y
        });
    }

    render() {
        const { x, y } = this.state;
        console.log("is start cell: ", this.props.isStartCell)
        return (
            <div style={this.cellStyle}
                className={this.props.isStartCell ? "start-cell" : null}
                onClick={() => this.props.setStartCell(x, y)}>
                {this.props.isStartCell}
            </div>
        )
    }
}