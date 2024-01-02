class Users {
    // properties, methods, constructor
    userName: string;
    age: number;

    constructor(userName: string, age: number) {
        this.userName = userName;
        this.age = age
    }

    display(): void{
        console.log(`username: ${this.userName}, age: ${this.age}`);
    }
}

// class object
let users1 = new Users('mohiuddin', 23)
users1.display()

let users2 = new Users('rahim udddin', 25)
users1.display()