"use strict";
const person1 = { name: "dyonyon", age: 26 };
const person2 = Object.create({ name: "dyonyon", age: 26 });
let obj = {};
obj = { name: "dyonyon" };
obj = [{ name: "dyonyon" }];
create({ prop: 0 });
create(null);
// create(42)           => Error
// create("string"")    => Error
// create(false)        => Error
// create(undefined)    => Error
// Object.create(0)     => Error
