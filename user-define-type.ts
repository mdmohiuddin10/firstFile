// union type
let userIds: string | number;
// userId = 123;
userIds = 'hi';

function displayUserid(userIds: string| number){
    console.log(userIds);
}

displayUserid('hlw')
displayUserid(123)

