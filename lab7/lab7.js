// Question 1: Fix using wrapper, bind, call, apply.
function askPassword(ok, fail) {
    // let password = prompt("Password?", '');
    let password = "me";
    if (password == "rockstar") 
        ok();
    else fail();
}

let user = {
    name: 'John',
    loginOK() {
        console.log(`${this.name} logged in`);
    },
    loginFail() {
        console.log(`${this.name} failed to log in`);
    }
};
// using the wrapper
// askPassword(function(){user.loginOK();} , function(){user.loginFail();});

// using the call
// askPassword(() => user.loginOK.call(user) , () => user.loginFail.call(user));

// using the apply
// askPassword(() => user.loginOK.apply(user) , () => user.loginFail.apply(user));

// using the bind
askPassword(user.loginOK.bind(user) ,user.loginFail.bind(user));

// Question 2: Fix the code below using bind

// Using bind
let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() {
        this.students.forEach(function(student) {
            console.log(this.title + ": " + student);
        }.bind(this));
    }
};

// using call
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         this.students.forEach(student => function(stu) {
//             console.log(this.title + ": " + stu);
//         }.call(this, student));
//     }
// };

// using apply
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         this.students.forEach(student => function(stu) {
//             console.log(this.title + ": " + stu);
//         }.apply(this, [student]));
//     }
// };

// using self pattern
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         let self = this;
//         this.students.forEach(function(student) {
//             console.log(self.title + ": " + student);
//         });
//     }
// };

// using arrow function
// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],
//     showList: function() {
//         let self = this;
//         this.students.forEach(student => console.log(this.title + ": " + student));
//     }
// };


group.showList();







