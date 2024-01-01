// enum type: for store constants; duplicate is not allowed here
// enum types: numeric, string, hetergenous
// numeric
// enum UserRequest {
//     ReadData,
//     SaveData,
//     DeleteData,
// }
// console.log(UserRequest);
var UserRequests;
(function (UserRequests) {
    UserRequests[UserRequests["ReadData"] = 5] = "ReadData";
    UserRequests[UserRequests["SaveData"] = 6] = "SaveData";
    UserRequests[UserRequests["DeleteData"] = 7] = "DeleteData";
})(UserRequests || (UserRequests = {}));
console.log(UserRequests.ReadData);
// string
var RequestTypes;
(function (RequestTypes) {
    RequestTypes["ReadData"] = "Read_data";
    RequestTypes["SaveData"] = "Save_data";
    RequestTypes["DeleteData"] = "Delete_data";
})(RequestTypes || (RequestTypes = {}));
// mix or hetergenous
var RequesestType3;
(function (RequesestType3) {
    RequesestType3["ReadData"] = "Read_data";
    RequesestType3[RequesestType3["SaveData"] = 102] = "SaveData";
    RequesestType3["DeleteData"] = "Delete_data";
})(RequesestType3 || (RequesestType3 = {}));
