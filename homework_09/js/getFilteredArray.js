predicateFunction = (num) => {
    return num > 3;
};

getFilteredArray = (array, callback) => {
    let newArray = [];

    forEach(array, (el) => {
        if (callback(el)) {
            newArray.push(el)
        }
    });

    return newArray;
};