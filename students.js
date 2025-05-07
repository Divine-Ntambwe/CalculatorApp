function studentsGrades(studentName,studentMarks) {
    this.name = studentName;
    this.marks = studentMarks;
    this.average = function () {
        let sum = 0;
        for (i of this.marks) {  
           sum += i;
        }

        return sum/this.marks.length ;

    }

    this.passed = function() {
        if (this.average() >= 70) {
            return this.name + " has passed"
        } else {
            return this.name + " has failed"
        }
    }

    this.toString = function() {
        let allMarks = '';
        
        for (let i = 1; i <= this.marks.length; i++) {
           allMarks += "test" + i + " = " + this.marks[i-1] + "\n"; 
        }

        return this.name + "\n" + "Marks:" + "\n" + allMarks + this.passed() + "\n" + "average = " + this.average() 
    }

}

const student1 = new studentsGrades("Divine Ntambwe", [80,90,95,95,74,65,93,95])
const student2 = new studentsGrades("Jane Doe", [40,79])
const student3 = new studentsGrades("Blessing Mbele",[70,80,90,96])
const student4 = new studentsGrades("Austin M",[78,90,"9o","8p",90])

let incorrectMarks = [];
function validateInput(marks) { 
    let counter = 0 ;
    let found = false;

    for (i of marks) {
        ++counter;
        if (i > 0 && Number.isInteger(i)) {

        } else {
            incorrectMarks.push('test'+counter)
            found = true;
        }
    }
    return found
} 

studentsGrades.prototype.ChangeMark = function(test,mark) {
    this.marks[test-1] = mark
};

student1.ChangeMark(2,91) ;

if (validateInput(student1.marks)) {
   console.log("The marks for " + incorrectMarks.toString() + " are in an invalid format")
} else {
   console.log(student1.toString())
}