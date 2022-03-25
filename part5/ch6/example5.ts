class Parent {
    constructor(protected _name:string, private _age: number){}

    public print():void{
        console.log(`이름은 ${this._name} 이고, 나이는 ${this._age} 입니다.`)
    }

    protected printName():void{
        console.log(this._name, this._age)
    }
}

const p51 = new Parent("dyonyon",26)
p51.print()

class Child extends Parent {
    // overwrite
    protected _name = "Dyonyon"

    public gender = 'male'

    constructor(age:number){
        super("Dyonyon",age)
        this.printName()
    }
}

const p52 = new Child(5)
p52.print()
