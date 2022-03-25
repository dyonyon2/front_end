interface IPerson {
    name:string
    age:number
}

type Keys = keyof IPerson

const keys1:Keys = "age"
const keys2:Keys = "name"

const person:IPerson = {
    name:"dyonyon",
    age:26
}

// Name일 때 string, age일 때 number가 나와야함 (관계성을 지님)

// IPerson[keyof IPerson]
// => IPerson["name" | "age"]
// => IPerson["name"]  | IPerson["age"]
// => string | number

// function getProp(obj: IPerson, key:'name' | 'age'):string|number{
// function getProp(obj: IPerson, key:keyof IPerson):IPerson[keyof IPerson]{
function getProp<T, K extends keyof T>(obj: T, key:K):T[K]{
    return obj[key]
}


getProp(person,'name')



getProp(person,'age')

function setProp<T,K extends keyof T>(obj:T, key:K, value:T[K]):void{
    obj[key] = value
}



setProp(person,"name","Anna")


