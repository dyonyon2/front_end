class Person3{
    private static CITY = "seoul"
    // public static hello(){
    public hello(){
        console.log("안녕하세요",Person3.CITY)
    }
    public change(){
        Person3.CITY= "LA"
    }
}

const p31 = new Person3()
p31.hello()

// Person3.hello()

const p32 = new Person3()
p32.hello()

p31.change()
p32.change()


