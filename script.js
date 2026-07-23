// part1
const student = {
    name: "Brean",
    age: 22, 
    enrolled: true, 
    courses: ["Math", "Science", "Geography"],
    displayInfo() {
        return this.name+" is "+this.age+" years old.";
    }
};

console.log(student.name+", "+student.age);
console.log(student.displayInfo());

//part2
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

console.log(studentObject.name === student.name);
console.log(studentObject === student);

