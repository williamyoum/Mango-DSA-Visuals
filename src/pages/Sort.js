import React, { Component } from 'react';
// import Slider from '../components/Slider';
import Controls from '../components/Shared/Controls';
import Graph from '../components/Graph';
import Dropdown from '../components/Shared/Dropdown';

class SortPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [],
            selectedArraySize: 20
        }
        // bindings
        this.bubbleSort = this.bubbleSort.bind(this);
        this.quickSort = this.quickSort.bind(this);
        this.handleSliderChange = this.handleSliderChange.bind(this);
        this.shuffleArray = this.shuffleArray.bind(this);
    }
    componentDidMount() {
        this.setState({
            array: this.shuffleArray(this.createArrayWithRange(250))
        });
    }
    createArrayWithRange(max) {
        let array = []
        for (let i = 1; i <= max; i++) {
            array.push(i)
        }
        return array;
    }
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
            this.setState({array : array});
        }
        return array;
    }
    async bubbleSort() {
        const array = this.state.array;
        for (let end = this.state.array.length - 1; end > 0; end--) {
            for (let i = 0; i < end; i++) {
                if (array[i] > array[i + 1]) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    this.setState({ array: array });
                }
                await this.sleep(0);
                console.log(this.state.array);
            }
        }
    }
    async quickSort() {
        const that = this;
        const array = this.state.array;
        await qSort(array, 0, array.length - 1); // just added this.

        async function qSort(array, low, high) {
            // implement quick sort here
            if (low < high) {
                let part = await partition(array, low, high);
                await qSort(array, low, part - 1);
                await qSort(array, part + 1, high);
            }
        }
        async function partition(array, low, high) {
            let index = low - 1;
            // set a pivot
            let pivot = array[high];
            for (let curr = low; curr < high; curr++) {
                // if array[index] is less than pivot, 
                // then leave it where it is and iterate index
                if (array[curr] < pivot) {
                    index++;
                    // swap elements
                    let temp = array[index];
                    array[index] = array[curr];
                    array[curr] = temp;
                    that.setState({ array: array });
                    await that.sleep(50);
                }

            }
            // if array[index] is greater than pivot, we gotta swap
            // swap i + 1 and upper bound element
            let temp = array[index + 1];
            array[index + 1] = array[high];
            array[high] = temp;
            return index + 1;

        }
        // this updates the state. updating the state will take care of the bars sorting visually.
    }
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    handleSliderChange(event) {
        this.setState({
            selectedArraySize: event.target.value,
            array: this.shuffleArray(this.createArrayWithRange(event.target.value))
        });
    }
    render() {
        return (
            <div>
                <section>
                    <Dropdown 
                        pageType = "Sorting Algo's" 
                        sortType1 = "Bubble Sort" 
                        sortType2 = "Quick Sort" />
                    {/* <div>sortType1.addEventListener();</div> */}
                    <Controls 
                        someSort = {this.quickSort} 
                        someSort2 = {this.bubbleSort} 
                        shuffleInSort = {this.shuffleArray}/>
                    <Graph 
                        array={this.state.array} />
                </section>
            </div>
        )
    }
}

export default SortPage