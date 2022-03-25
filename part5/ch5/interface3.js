"use strict";
function hello3(person) {
    console.log(`안녕하세요 ${person.name} 입니다! `);
}
const p31 = {
    name: "dyonyon",
    age: 26
};
const p32 = {
    name: "sojoong",
    systers: ["Lee", "Choi"]
};
const p33 = {
    name: "Choi",
    father: p31,
    mother: p32
};
hello3(p31);
hello3(p32);
hello3(p33);
