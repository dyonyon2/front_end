function helloArray<T>(message:T[]):T{
    return message[0]
}

console.log(helloArray(["Hello","World"]))
console.log(helloArray(["Hello",5]))

function helloTuple<T,K>(message:[T,K]):T{
    return message[0]
}

helloTuple(["Hello","world"])



helloTuple(["Hello",5])



