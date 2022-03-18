// let myName = "dyonyon";
// let email = 'jychoi9712@naver.com';
// let hello = `hello ${email} ?!`;


// console.log(myName);
// console.log(email);
// console.log(hello);

// let user = {
//     name:"dyonyon",
//     age:26,
// };

// console.log(user);
// console.log(user.age);
// console.log(user.name);

// let fruits = ['Apple','test',123];

// console.log (fruits[0]);
// console.log (fruits[1]);
// console.log (fruits[2]);

// function hello(){
//     console.log('hello!');
// };

// let world = function(){ 
//     console.log("world~");
// };

// hello();
// world();

// const dyonyon = {
//     name:'dyonyon',
//     age : 26,
//     getName : function(){
//         return this.name;
//     }
// };

// const hisName = dyonyon.getName();
// console.log(hisName);
// console.log(dyonyon.getName());

// let isShow = true;
// let checked = false;

// if(isShow){
//     console.log("show!!");
// }
// if(checked){
//     console.log("check!!");
// }

// if(isShow){
//     console.log("show!!");
// }
// else{
//     console.log("hide?!");
// }

// let boxEl = document.querySelector('.box');

// console.log(boxEl);

// boxEl.addEventListener('click',function(){
//     console.log('Click!!!!');
// })


// let boxEl = document.querySelector('.box');

// console.log(boxEl);

// boxEl.addEventListener('click',function(){
//     console.log('Click!!!!');
//     boxEl.classList.add('active');
//     console.log(boxEl.classList.contains('active'));
//     boxEl.classList.remove('active');
//     console.log(boxEl.classList.contains('active'));
// })

// const boxEls = document.querySelectorAll('.box');
// console.log(boxEls);

// boxEls.forEach(function (boxEl, index){
//     boxEl.classList.add(`order-${index+1}`);
//     console.log(index, boxEl)
// })

const boxEl = document.querySelector('.box');

console.log(boxEl.textContent);

boxEl.textContent = "dyonyon?!"
console.log(boxEl.textContent);