class Person {
    public readonly name:string ="dyonyon"
    private readonly country:string ="Korea"

    public constructor(private _name:string, private _age:number){
        this.country = "Korea"
    }

    hello(){
        // this.country = "America"
    }
}

const p1:Person = new Person("dyonyon",26)
console.log(p1)
console.log(p1.name)    //get을 하는 함수 getter
// p1.name = "sojoong"     //set을 하는 함수 setter
console.log(p1.name)    //get을 하는 함수 getter



