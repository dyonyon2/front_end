function helloString(message:string):string{
    return message
}

function helloNumber(message: number):number{
    return message
}

// 더 많은 반복된 함수들....

function hello(message:any):any{
    return message
}

console.log(hello("dyonyon").length)
console.log(hello(39).length)
// 숫자는 length 사용 X 

function helloGeneric<T>(message:T):T{
    return message
}

console.log(helloGeneric("dyonyon").length)
// console.log(helloGeneric(39).length)
console.log(helloGeneric(true))


