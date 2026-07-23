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

//part3
const { name, courses } = student;
console.log(name);
console.log(courses);

const scores = [75, 22, 98, 90];
const [firstScore, secondScore] = scores;
console.log(firstScore, secondScore);


//part 4 
const clonedStudent = { ...student, graduationYear: 2026};
console.log(clonedStudent);
console.log(student.graduationYear);

const newCourses = ["Art", "Gym"];
const allCourses = [...student.courses, ...newCourses];

console.log(allCourses);


//part 5
student.addCourse = function(course) {
    this.courses.push(course);
};
student.totalCourses = function() {
    return this.courses.length;
};

student.addCourse("Chemistry");
console.log(student.courses);
console.log(student.totalCourses());
