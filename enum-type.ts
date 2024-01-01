// enum type: for store constants; duplicate is not allowed here
// enum types: numeric, string, hetergenous
// numeric
// enum UserRequest {
//     ReadData,
//     SaveData,
//     DeleteData,
// }
// console.log(UserRequest);
enum UsersRequests {
    ReadData = 5,
    SaveData,
    DeleteData,
}
console.log(UsersRequests.ReadData);

// string
enum RequestTypes {
    ReadData = 'Read_data',
    SaveData = 'Save_data',
    DeleteData = 'Delete_data',
}

// mix or hetergenous

enum RequesestType3 {
    ReadData = 'Read_data',
    SaveData = 102,
    DeleteData = 'Delete_data',
}