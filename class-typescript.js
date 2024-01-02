var Users = /** @class */ (function () {
    function Users(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Users.prototype.display = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return Users;
}());
// class object
var users1 = new Users('mohiuddin', 23);
users1.display();
