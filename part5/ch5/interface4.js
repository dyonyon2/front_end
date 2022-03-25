"use strict";
const p41 = {
    name: "dyonyon",
    age: 26,
    hello: function () {
        console.log(`안녕하세요 ${this.name} 입니다! `);
    }
};
const p42 = {
    name: "dyonyon",
    age: 26,
    hello() {
        console.log(`안녕하세요 ${this.name} 입니다! `);
    }
};
p41.hello();
p42.hello();
// const p43: Person4 = {
//     name:"dyonyon",
//     age:26,
//     hello:():void => {
//         console.log(`안녕하세요 ${this.name} 입니다! `)
//     }
// }
