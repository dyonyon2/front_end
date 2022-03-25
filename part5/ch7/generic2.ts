function helloBasic<T, U>(message:T, comment: U):T{
    return message
}

helloBasic<string, number>("dyonyon",26)
// helloBasic<string, number>(25,26)

helloBasic(25,26)


