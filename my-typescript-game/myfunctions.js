"use strict";
//without infering the datatype the default datatype will be any
//can cause issues in the future
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    // return num + 2
    return "hello";
}
function getUpper(val) {
    return val.toUpperCase();
}
function singUpUser(name, email, isPaid) { }
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
//default value for isPaid boolean
addTwo(5);
getUpper("peang");
singUpUser("peang", "sheesh@gmail.com", true);
loginUser("h", "h@H.com");
