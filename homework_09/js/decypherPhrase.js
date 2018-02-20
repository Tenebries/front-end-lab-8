decypherPhrase = (object, string) => {
    let newObject = {};

    for (let key in object) {
        if (object.hasOwnProperty(key)) {
            newObject[object[key]] = key;
        }
    }

    return cypherPhrase(newObject, string);
};