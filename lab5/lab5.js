// Q1: Create a function using function declaration named sum with one parameter of Array type, 
// the returned result is the sum of all elements which are greater than 20.

const arr = [1,21,20,3,22];

console.log("The sum of numbers in the array [" + arr + "] greater than 20 is " + sum(arr));

function sum(x) {
    return x.filter(num => num > 20).reduce(((a, b) => a+=b), 0);
}

// Q2: Create a function using function expression named getNewArray with one parameter of String Array, 
// return a new array which contains all string, length is greater than and equal to 5, and contains letter ‘a’.

const strArr = ['Uganda', 'Yasin', 'USA', 'Japan', 'China'];

let getNewArray = function(x) {
    return x.filter(str => str.length >= 5 && str.includes('a'));
}

console.log(getNewArray(strArr));
