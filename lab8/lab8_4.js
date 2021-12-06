// Question4: Use object literal and constructor function to implement a Singley LinkedList.
// methods below:
// - add(value)
// - remove(value)
// - print()

// Use case: 
// - let linkedlist = new LinkedList()
// - linkedlist.add(1);
// - linkedlist.add(2);
// - linkedlist.add(3);
// - linkedlist.print(); // Expected Result: LinkedList{1,2,3}
// - linkedlist.remove(2);
// - linkedlist.print(); // Expected Result: LinkedList{1,3}

// Object literal
let linkedlist = {};

linkedlist.add = function(element) {
    if (this.value === undefined) {
        this.value = element;
        this.next = null;
    } else {
        let current = this;
        while (current.next) {
            current = current.next;
        }
        current.next = {value: element, next: null};
    }
}

linkedlist.remove = function(element) {
    var current = this; 
    var prev = null; 
    while (current) { 
        if (current.value === element) { 
            if (prev == null) { 
                this.value = current.next.value; 
                this.next = current.next.next; 
            } else { 
                prev.next = current.next; 
            } 
            return true; 
        } 
        prev = current; 
        current = current.next; 
    } 
    return false; 
}

linkedlist.printHelper = function(list, result) {
    if (list.next == null) {
        result += list.value; 
        return result;
    } 
    result += list.value + ','; 
    return this.printHelper(list.next, result); 
}

linkedlist.print = function() {
    let result = 'LinkedList{';
    result = this.printHelper(this, result);
    result += '}';
    console.log(result); 
}

linkedlist.add(1);
linkedlist.add(2);
linkedlist.add(3);
linkedlist.print(); // Expected Result: LinkedList{1,2,3}
linkedlist.remove(2);
linkedlist.print(); // Expected Result: LinkedList{1,3}

// Constructor Function Solution

function LinkedList(){

}

LinkedList.prototype.add = function(element) {
    if (this.value === undefined) {
        this.value = element;
        this.next = null;
    } else {
        let current = this;
        while (current.next) {
            current = current.next; 
        }
        current.next = { value: element, next: null };
    }
}

LinkedList.prototype.remove = function(element) {
    var current = this;
    var prev = null;
    while (current) {
        if (current.value === element) {
            if (prev == null) {
                this.value = current.next.value;
                this.next = current.next.next;
            } else {
                prev.next = current.next;
            }
            return true;
        }
        prev = current;
        current = current.next;
    }
    return false;
}

LinkedList.prototype.printHelper = function(list, result) {
    if (list.next == null) {
        result += list.value;
        return result;
    }
    result += list.value + ',';
    return this.printHelper(list.next, result);
}

LinkedList.prototype.print = function() {
    let result = 'LinkedList{';
    result = this.printHelper(this, result);
    result += '}';
    console.log(result);
}

let linkedlist2 = new LinkedList(); 
linkedlist2.add(1);
linkedlist2.add(2);
linkedlist2.add(3);
linkedlist2.print(); //in the console, you should see: LinkedList{1,2,3}
linkedlist2.remove(3); 
linkedlist2.print(); //in the console, you should see: LinkedList{1,3}


