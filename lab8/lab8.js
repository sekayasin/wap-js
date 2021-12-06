// Question1: Create an object student using object literal which has 
// properties: firstName: string, lastName: string, grades: Array
// methods: 
// - inputNewGrade(newGrade): push newGrade to grades
// - computeAverageGrade(): return average of grades
// create an Array with multiple students which are created using Object.create();
// - then compute the average grade for all students in the array

let student = {
    firstName: '',
    lastName: '',
    grades: [],
    inputNewGrade: function(newGrade) {
        this.grades.push(newGrade);
    },
    computeAverageGrade: function() {
        return this.grades.reduce((sum, currVal, index, arr) => sum + currVal / arr.length, 0);
    }
};

console.log(student);

const student1 = Object.create(student);
student1.firstName = 'Yasin';
student1.lastName = 'Sekabira';
student1.inputNewGrade(95);
student1.inputNewGrade(99);
student1.inputNewGrade(92);
console.log(student1);
// console.log(student1.computeAverageGrade());

const student2 = Object.create(student);
student2.firstName = 'Mansoor';
student2.lastName = 'Kalasa';
student2.inputNewGrade(91);
student2.inputNewGrade(99);
student2.inputNewGrade(90);
console.log(student2);
// console.log(student2.computeAverageGrade());

const students = [student1, student2];

const averageGrade = students.reduce((sum, studentCurrAverageGrade, index, arr) => sum + studentCurrAverageGrade.computeAverageGrade() / arr.length, 0);

console.log(`Average Grade for All Students: ${averageGrade}`);






