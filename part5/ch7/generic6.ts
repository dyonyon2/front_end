class PersonExtends<T extends string | number>{
    private _name:T

    constructor(name:T){
        this._name = name
    }
}

new PersonExtends('dyonyon')
new PersonExtends(26)
// new PersonExtends(true)


