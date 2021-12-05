// Question2: Write a function printNumbers(from, to) that outputs a number
// every second, starting from from and ending with to

function printNumbers(from, to) {
    let currentNumber = from;

    let timer = setInterval(function(){
        console.log(currentNumber);
        if (currentNumber === to) {
            clearInterval(timer);
        }
        currentNumber += 1;
    }, 1000);
}

// printNumbers(2, 6);

// Question 3: In the code below there's a setTimeout call scheduled, 
// then a heavy calculation is run, that takes more than 100ms to finish.
// When will the scheduled function run? 
// - After the loop
// - Before the loop 
// - In the beginning of the loop
// - What is alert going to show?

let i = 0; 
setTimeout(() => console.log(i), 100);

// assume that the time to execute this function is > 100ms
for (let j = 0; j <= 100000000; j++) {
    i++;
}

// Answer - Any setTimeout will run only after the current code has finished. 
// The i will be the last one: 100000000
