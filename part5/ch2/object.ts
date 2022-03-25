const person1 = { name: "dyonyon" , age: 26 }

const person2 = Object.create({ name: "dyonyon" , age: 26 })

let obj:object = {}
obj = {name:"dyonyon"}
obj = [{name:"dyonyon"}]
// obj = 39             => Error
// obj = "dyonyon"      => Error
// obj = true           => Error
// obj = 100n           => Error
// obj = Symbol()       => Error
// obj = null           => Error
// obj = undefined      => Error

declare function create(o:object | null): void;
create({prop:0})
create(null)
// create(42)           => Error
// create("string"")    => Error
// create(false)        => Error
// create(undefined)    => Error
// Object.create(0)     => Error

