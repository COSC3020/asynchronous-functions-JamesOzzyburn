var async = require("async");
const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

array = [1,2,3,4,5]
assert(asyncTesting(array, 0) == 0);

array = [1,1,3,1,1,3,1,1,3]
assert(asyncTesting(array, 1) == 6);

array = ["dog", "cat", "dog", "mouse"]
assert(asyncTesting(array, "dog") == 2);

array = ["dog", "cat", "dog", "mouse"]
assert(asyncTesting(array, "bear") == 0);

array = ["dog", "cat", "dog", "mouse", 1,1,3,1,1,3,1,1,3]
assert(asyncTesting(array, "3") == 3);