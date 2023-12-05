function asyncTesting(array, key) {

    //Functions that looks at the current value and the key
    function getCountMatch(memo, arrayPart, callback) {
        if(arrayPart == key) {return callback(null, memo + 1);}
        else {return callback(null, memo);}
    }

    var count = 0;
    //Actually async call to reduce
    //Got how to use it from https://caolan.github.io/async/v3/docs.html#reduce
    async.reduce(array, 0, getCountMatch, function(err, results) {
        if (err) {
            console.log(err);
        } else {
            count = results;
        }
    });
    return count;
}