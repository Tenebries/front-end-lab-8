callback = (el) => {
    return el;
};

forEach = (array, callback) => {
    for (let i = 0, length = array.length; i < length; i++) {
        callback(array[i]);
    }
};