"use strict";
class Person3 {
    // public static hello(){
    hello() {
        console.log("안녕하세요", Person3.CITY);
    }
    change() {
        Person3.CITY = "LA";
    }
}
Person3.CITY = "seoul";
const p31 = new Person3();
p31.hello();
// Person3.hello()
const p32 = new Person3();
p32.hello();
p31.change();
p32.change();
