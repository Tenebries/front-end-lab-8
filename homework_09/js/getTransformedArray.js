increment = (num) => {
    return num + 1;
};

getTransformedArray = (array, callback) => {
    let newArray = [];

    forEach(array, (el) => {
        newArray.push(callback(el))
    });

    return newArray;
};