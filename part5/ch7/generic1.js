"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
// 더 많은 반복된 함수들....
function hello(message) {
    return message;
}
console.log(hello("dyonyon").length);
console.log(hello(39).length);
// 숫자는 length 사용 X 
function helloGeneric(message) {
    return message;
}
console.log(helloGeneric("dyonyon").length);
// console.log(helloGeneric(39).length)
console.log(helloGeneric(true));
