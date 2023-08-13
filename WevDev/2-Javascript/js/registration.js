// task 1
class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if ( testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}

// task 2
class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }
    // task 3
    registerStudent(studentToRegister) {
        
        if (!studentToRegister.name || !studentToRegister.email) {
            console.log('Invalid name or email.');
            return false;
        }
        
        for (let student of this.students) {
            if (studentToRegister.email === student.email) {
                console.log(`The student with the email of ${studentToRegister.email} is already registered.`)
                return false;
            }
        }
        this.students.push(studentToRegister);
        console.log(`${studentToRegister.name} is now registered to level ${this.level}!`);
        return true;
    }
    // task 4
    listStudents() {
        if (this.students.length === 0) {
            console.log(`No students are registered to the ${this.name} bootcamp.`)
            return false;
        } else {
            let currentStudentList = [];
            for (let student of this.students) {
                currentStudentList.push(`Name: ${student.name} Email: ${student.email}`);
            }
            console.log(`The students registered in ${this.name} are:\n${currentStudentList.join('\n')}`);
            return true;
        }
    }
    // Bonus 1
    getInfo() {
        if (!this.name && !this.level) {
            console.log('BONUS 1: The bootcamp does not have a name or level.');
        } else {
            console.log(`BONUS 1: The bootcamps name is ${this.name} and the level is ${this.level}.`);
        }
    }
    // bonus 2
    removeStudent(deletingUserEmail) {

        if (this.students.length === 0) {
            console.log(`BONUS 2: No students are registered to the ${this.name} bootcamp.`);
        } else {
            let deletingUserIndex = null;
            let found = false;
            for (let i = 0; i < this.students.length; i++) {
                if (deletingUserEmail === this.students[i].email) {
                    const deletingUserIndex = [i];
                    console.log(`BONUS 2: The user with the email of ${deletingUserEmail} has been deleted.`)
                    found = true;
                }
            }
            if (!found) {
                console.log(`BONUS 2: There is no user with the email address of ${deletingUserEmail}`);
                return;
            }
            this.students.splice(deletingUserIndex,1);
            this.listStudents();
        }
    }
}

// task 2
reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if ( reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
        && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}


// task 3
const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    // task 4
    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    // bootcamp.students = []; // needed to remove this for bonus 2
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }

    // bonus 1
    bootcamp.getInfo();

    // bonus 2
    bootcamp.removeStudent('bugs@bunny.com');

};
runTest(reactBootcamp, testStudent);


// task 4
