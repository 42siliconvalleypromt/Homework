/*
 *  Homework 01 - Decrease and Conquer
 *  Utilize the decrease and conquer pattern to solve these problems.
 */

/*
 * Number of Ones
 *
 * *Given a sorted bit array (values of either 0 or 1), determine the number of 1's in the array.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Output: {Integer}
 *
 * **Constraints**
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] --> 8`
 * `[0, 0, 0] --> 0`
 * `[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] --> 7`
 */


function numberOfOnes(arr) {
  // YOUR WORK HERE
}



/*
 * ## Closest Value
 *
 * *Given a sorted bit array of integers, and a target value, find the number in the array that is closest to the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * If there are two numbers tied for the closest value, return the lowest value.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 6 --> 5`
 * `[1, 2, 3], 8 --> 3`
 * `[1, 10, 22, 59, 67, 72, 100], 70 --> 72`
 */


function closestValue(arr, target) {

  // YOUR WORK HERE
}



/*
 * ## Square Root
 *
 * *Given an positive integer, find the square root.*
 *
 * **Parameters**
 * Input: value {Integer}
 * Output: {Float}
 *
 * **Constraints**
 * Do not use a native built in method.
 * Ensure the result is accurate to 6 decimal places (0.000001)
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `4 --> 2.0`
 * `98 --> 9.899495`
 * `14856 --> 121.885192
 */


function squareRoot(n) {
  // YOUR WORK HERE
}



/*
 * ## Greater Values
 *
 * *Given an sorted array of integers, and a target value return the number of values greater the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 5 --> 4`
 * `[1, 2, 3], 4 --> 0`
 * `[1, 10, 22, 59, 67, 72, 100], 13 --> 5`
 *
 */

function greaterValues(arr, target) {
  // YOUR WORK HERE
}



/*
 * ## Sorted and Rotated Array [Extra Credit]
 * *Given a array that is sorted an rotated, find out if a target value exists in the array.*
 *
 * An sorted array is rotated by taking an unknown amount of values from the beginning and placing it at the end.
 *
 * `[3, 4, 5, 1, 2]` is rotated left by 2.
 * `[99, 14, 25, 78, 93]` is rotated to the right by 1.
 *
 * **Parameters**
 * Input: arr {Array}
 * Output: {Boolean}
 *
 * **Constraints**
 * Time: O(logN)
 * Space: O(N)
 *
 * **Examples**
 * `[35, 46, 79, 102, 1, 14, 29, 31], 46 --> true`
 * `[35, 46, 79, 102, 1, 14, 29, 31], 47 --> false`
 * `[7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 9 --> true`
 */


function rotatedArraySearch(nums, target) {
  // YOUR WORK HERE
}


/*
 * ## Multiplication Using Russian Peasant [Extra Credit]
 *
 * *Given two positive integers, return its product using Russian Peasant method of multiplication*
 *
 * Read up on how to apply the Russian Peasant method [here](https://en.wikipedia.org/wiki/Ancient_Egyptian_multiplication). It is also referred to as the Egyptian multiplication.
 *
 * **Parameters**
 * Input: a {Integer}
 * Input: b {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * Assume a <= b, and the value of a is N.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `734, 487 --> 357458`
 * `846, 908--> 768168`
 */

function  multiplicationRussianPeasant(a, b) {
  // YOUR WORK HERE
}



////////////////////////////////////////////////////////////
///////////////  DO NOT TOUCH TEST BELOW!!!  ///////////////
////////////////////////////////////////////////////////////


let testCount;

console.log('Number of Ones Tests');
testCount = [0, 0];

assert(testCount, 'should return correct number of ones for array with zeroes and ones', () => {
  let example = numberOfOnes([0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]);
  return example !== undefined && example === 8;
});

assert(testCount, 'should return correct number of ones for array with all zeroes', () => {
  let example = numberOfOnes([0, 0, 0]);
  return example !== undefined && example === 0;
});

assert(testCount, 'should return correct number of ones for array with all ones', () => {
  let example = numberOfOnes([1, 1, 1]);
  return example !== undefined && example === 3;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Closest Value Tests');
testCount = [0, 0];

assert(testCount, 'should return correct closest value for number in the middle range', () => {
  let example = closestValue([1, 2, 3, 5, 5, 7, 9, 10, 11], 6);
  return example !== undefined && example === 5;
});

assert(testCount, 'should return closest value for highest number', () => {
  let example = closestValue([1, 2, 3], 8);
  return example !== undefined && example === 3;
});

assert(testCount, 'should return closest value for lowest number', () => {
  let example = closestValue([-2, -1, 0], -5);
  return example !== undefined && example === -2;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Square Root Tests');
testCount = [0, 0];

assert(testCount, 'should return correct square root for number < 10', () => {
  let example = squareRoot(4);
  return example !== undefined && example === 2.0;
});

assert(testCount, 'should return correct square root for number between 10 and 100', () => {
  let example = squareRoot(98);
  return example !== undefined && parseFloat(example) === 9.899495;
});

assert(testCount, 'should return correct square root for number over 10,000', () => {
  let example = squareRoot(14856);
  return example !== undefined && parseFloat(example) === 121.885192;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Greater Values Tests');
testCount = [0, 0];

assert(testCount, 'should return greater values for number in the middle of the array', () => {
  let example = greaterValues([1, 2, 3, 5, 5, 7, 9, 10, 11], 5);
  return example !== undefined && example === 4;
});

assert(testCount, 'should return 0 for number greater than largest in the array', () => {
  let example = greaterValues([1, 2, 3], 4);
  return example !== undefined && example === 0;
});

assert(testCount, 'should return greater values for number less than least in the array', () => {
  let example = greaterValues([1, 10, 22, 59, 67, 72, 100], -2);
  return example !== undefined && example === 7;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Rotated Sorted Array Tests');
testCount = [0, 0];

assert(testCount, 'returns true when target is in the array', () => {
  let example = rotatedArraySearch([35, 46, 79, 102, 1, 14, 29, 31], 46);
  return example !== undefined && example === true;
});

assert(testCount, 'returns false when target is not in the array', () => {
  let example = rotatedArraySearch([35, 46, 79, 102, 1, 14, 29, 31], 47);
  return example !== undefined && example === false;
});

assert(testCount, 'returns true when target is the first number in the array', () => {
  let example = rotatedArraySearch([7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 7);
  return example !== undefined && example === true;
});

assert(testCount, 'returns true when target is the last number in the array', () => {
  let example = rotatedArraySearch([7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 6);
  return example !== undefined && example === true;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');


console.log('Multiplication Russian Tests');
testCount = [0, 0];

assert(testCount, 'returns correct value for two integers', () => {
  let example = multiplicationRussianPeasant(734, 487);
  return example !== undefined && example === 357458;
});

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');



// captures all elements that were printed to the console
//
// input: method {Function} - function to execute
// input: {Array} - parameters for the function
// output: {Array} - array of all the captured logs
function captureLog(method, ...params) {
  let record = [];
  const log = console.log;
  console.log = (...args) => {
    record = record.concat(...args);
  };
  method(...params);
  console.log = log;
  return record;
}

// compare if two flat arrays are equal
function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) { return false; }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) { return false; }
  }
  return true;
}



// custom assert function to handle tests
// input: count {Array} - keeps track out how many tests pass and how many total
//        in the form of a two item array i.e., [0, 0]
// input: name {String} - describes the test
// input: test {Function} - performs a set of operations and returns a boolean
//        indicating if test passed
// output: {undefined}
function assert(count, name, test) {
  if(!count || !Array.isArray(count) || count.length !== 2) {
    count = [0, '*'];
  } else {
    count[1]++;
  }

  let pass = 'false';
  let errMsg = null;
  try {
    if (test()) {
      pass = ' true';
      count[0]++;
    }
  } catch(e) {
    errMsg = e;
  }
  console.log('  ' + (count[1] + ')   ').slice(0,5) + pass + ' : ' + name);
  if (errMsg !== null) {
    console.log('       ' + errMsg + '\n');
  }
}
