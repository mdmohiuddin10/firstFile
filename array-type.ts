// array type can declare in two ways
// let usersName: string[];
let usersName: Array<string>;

usersName = ['anis', 'karim', 'mohiuddin']
console.log(usersName[0]);

// array in multiple type
let multipleTypes: (string|number)[];
multipleTypes = [1223, 'hlw']