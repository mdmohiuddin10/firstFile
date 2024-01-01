

type User = { userName: string, userId: number};

let users: User[];
users = [];


let user1: User;
user1 = { userName: 'karim', userId: 123}
users.push(user1)

let user2: User;
user2 = { userName: 'rahim', userId: 133}
users.push(user2)

// let user3: { userName: string, userId: number}
let user3: User;
user3 = { userName: 'Sahim', userId: 143}
users.push(user3)
console.log(users);

type senderType = 'Get' | 'Post';
let getSenderType: senderType;
getSenderType = 'Post'

function requestHandler(requestType: senderType){
    console.log(requestType);
}
requestHandler('Get')