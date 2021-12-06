// Question2: Redo the Question1 using Constructor Function
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];
}

Student.prototype.inputNewGrade = function(newGrade) {
    this.grades.push(newGrade);
};

Student.prototype.computeAverageGrade = function() {
    return this.grades.reduce((sum, currVal, index, arr) => sum + currVal / arr.length, 0);
};

console.log(Student);

const student1 = new Student('Yasin', 'Sekabira');
student1.inputNewGrade(95);
student1.inputNewGrade(99);
student1.inputNewGrade(92);
console.log(student1);
console.log(student1.computeAverageGrade());

const student2 = new Student('Mansoor', 'Kalasa');
student2.inputNewGrade(91);
student2.inputNewGrade(99);
student2.inputNewGrade(90);
console.log(student2);
console.log(student2.computeAverageGrade());

const students = [student1, student2];

const averageGrade = students.reduce((sum, studentCurrAverageGrade, index, arr) => sum + studentCurrAverageGrade.computeAverageGrade() / arr.length, 0);

console.log(`Average Grade for All Students: ${averageGrade}`);
