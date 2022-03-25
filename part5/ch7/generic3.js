"use strict";
function helloArray(message) {
    return message[0];
}
console.log(helloArray(["Hello", "World"]));
console.log(helloArray(["Hello", 5]));
function helloTuple(message) {
    return message[0];
}
helloTuple(["Hello", "world"]);
helloTuple(["Hello", 5]);
