// class Person {
//     private _name:string
//     constructor(name:string){
//         this._name = name
//     }
// }

class Person<T, K> {
    private _name:T
    private _age:K
    constructor(name:T, age:K){
        this._name = name
        this._age = age
    }
}

new Person("dyonyon",26)
new Person<string,number>("dyonyon", 26)

// new Person<string,number>("dyonyon", "error")



