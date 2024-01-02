class Users {
    // properties, methods, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age
    }

    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}

// class object
// let users1 = new Users('mohiuddin', 23)
// users1.display()

// let users2 = new Users('rahim udddin', 25)
// users1.display()

class Student extends Users {
    studentId: number;

    constructor(userName: string, age: number, studentId: number) {
        super(userName, age);
        this.studentId = studentId;
    }
    display(): void {
        console.log(`username: ${this.userName}, age: ${this.age}, studentId: ${this.studentId}`);
    }
}

let student1 = new Student('anisul', 13, 4536546)
student1.display();