var users;
users = [];
var user1;
user1 = { userName: 'karim', userId: 123 };
users.push(user1);
var user2;
user2 = { userName: 'rahim', userId: 133 };
users.push(user2);
// let user3: { userName: string, userId: number}
var user3;
user3 = { userName: 'Sahim', userId: 143 };
users.push(user3);
console.log(users);
var getSenderType;
getSenderType = 'Post';
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler('Get');
