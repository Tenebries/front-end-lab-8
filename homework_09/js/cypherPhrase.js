cypherPhrase = (object, string) => {
    string = string.split('');

    string = getTransformedArray(string, function(element) {
        for(let key in object){
            if (element === key) {
                element = object[key];
            }
        }

        return element;
    });

    return string.join('');
};