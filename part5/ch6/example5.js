"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`);
    }
    printName() {
        console.log(this._name, this._age);
    }
}
const p51 = new Parent("dyonyon", 26);
p51.print();
class Child extends Parent {
    constructor(age) {
        super("Dyonyon", age);
        // overwrite
        this._name = "Dyonyon";
        this.gender = 'male';
        this.printName();
    }
}
const p52 = new Child(5);
p52.print();
