// Question3: Add a new method named sort() without parameters in built in constructor function Array. 
// it'll sort all elements in the array in ascending order. 

Array.prototype.mysort = function() {
    let arr = this;
    let len = arr.length;

    for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
            if (arr[j-1] > arr[j]) {
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
};

console.log([5,2,3,11,0,9].mysort());
