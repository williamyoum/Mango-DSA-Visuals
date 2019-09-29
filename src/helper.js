const DEFAULT_SLEEP_MS = 10;

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const createArrayWithRange = (max) => {
    let array = []
    for (let i = 1; i <= max; i++) {
        array.push(i)
    }
    return array;
}

const sorts = {
    bubble: async (array, callback) => {
        for (let end = array.length - 1; end > 0; end--) {
            for (let i = 0; i < end; i++) {
                if (array[i] > array[i + 1]) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;
                    callback(array);
                }
                await sleep(DEFAULT_SLEEP_MS);
            }
        }
    },
    quick: async (array, callback) => {
        const quickSort = async (array, left, right) => {
            if (left >= right) return;
    
            // choose pivot
            const pivot = array[right];
            const seperation = await partition(array, left, right, pivot);
    
            await quickSort(array, left, seperation - 1);
            await quickSort(array, seperation, right);
        }

        const partition = async (array, left, right, pivot) => {
            while (left < right) {
                // move left pointer until it should be moved (it is bigger than pivot)
                while (array[left] < pivot) {
                    left++;
                }
    
                // move right pointer until it should be moved (it is smaller than pivot)
                while (array[right] > pivot) {
                    right--;
                }
    
                // swap
                const temp = array[left];
                array[left] = array[right];
                array[right] = temp;
                // callback here
                callback(array);
                // that.setState({
                //     array: array,
                //     comparingIndexes: [array[left], array[right]]
                // });
                await sleep(DEFAULT_SLEEP_MS);
            }
    
            // return the new seperation point
            return right;
        }
        await quickSort(array, 0, array.length - 1);
        callback(array);
        // this.setState({comparingIndexes: []});
    }
}

export {
    createArrayWithRange,
    sorts
};