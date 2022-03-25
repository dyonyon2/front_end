"use strict";
const keys1 = "age";
const keys2 = "name";
const person = {
    name: "dyonyon",
    age: 26
};
// Name일 때 string, age일 때 number가 나와야함 (관계성을 지님)
// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"]  | IPerson["age"]
// => string | number
// function getProp(obj: IPerson, key:'name' | 'age'):string|number{
// function getProp(obj: IPerson, key:keyof IPerson):IPerson[keyof IPerson]{
function getProp(obj, key) {
    return obj[key];
}
getProp(person, 'name');
getProp(person, 'age');
function setProp(obj, key, value) {
    obj[key] = value;
}
setProp(person, "name", "Anna");
