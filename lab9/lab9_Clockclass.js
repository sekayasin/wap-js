// Question1: Answer below questions based on clock constructor function (in class exercise) and clock class. 
// - Also add a line of code that will stop the clock after 10 ticks
// - what is the inner function of the constructor function?
// - What is the local variable of the constructor function?
// - what is the clock interface returned by the constructor function? 
// - what are the closures?
// - what are the private variables and functions? 
// - what are the public methods? 
// - How does this example illustrate that a JavaScript class is really a function and not an object? 

// Clock class

class Clock {
    constructor({ template }) {
        this.template = template;
    }
    render() {
        let date = new Date();
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);
        console.log(output);
    }
    stop() {
        clearInterval(this.timer);
    }
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
let clock = new Clock({ template: 'h:m:s' });
console.log(clock);
clock.start();
setTimeout(() => clock.stop(), 10000);

/*
Answers
1. Also add a line of code that will stop the clock after 10 ticks
setTimeout(() => clock.stop(), 10000);

2. what is the inner function of the constructor function?
no

3. What is the local variable of the constructor function?
no

4. what is the clock interface returned by the constructor function? 
An Object of the Clock
Clock { template: 'h:m:s' }

5. what are the closures?
No

6. what are the private variables and functions? 
no

7. what are the public methods? 
stop, start, render
*/ 