console.log(Symbol('foo') === Symbol('foo'))

const sym = Symbol()

const obj1 = {
    sym:"value",
}

obj1["sym"]

const obj2 = {
    [sym]:"value",
}

obj2[sym]

