"use strict";
class Person {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
        this.name = "dyonyon";
        this.country = "Korea";
        this.country = "Korea";
    }
    hello() {
        // this.country = "America"
    }
}
const p1 = new Person("dyonyon", 26);
console.log(p1);
console.log(p1.name); //get을 하는 함수 getter
// p1.name = "sojoong"     //set을 하는 함수 setter
console.log(p1.name); //get을 하는 함수 getter
