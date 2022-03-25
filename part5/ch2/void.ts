function returnVoid(message:string):void{
    console.log(message)

    return undefined
}

function returnVoid2(message:string):void{
    console.log(message)

    return 
}

const r = returnVoid('리턴이 없다.')

