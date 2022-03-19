// 데이터 타입 확인
// import getType from './getType'

// console.log(typeof 'hello world!')
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof [])

// console.log(getType(123))
// console.log(getType(false))
// console.log(getType({}))
// console.log(getType([]))

// 산술 연산자(arithmetic operator)
// console.log(1 + 2)
// console.log(5 - 7)
// console.log(3 * 4)
// console.log(10 / 2)
// console.log(3 % 4)

// 할당 연산자(assignment operator)
// let a = 2
// a = a + 1
// a += 1
// a -= 3
// a *= 4
// a /= 2
// a %= 2

// console.log(a)

// 비교 연산자 (comparison operator)
// const a = 1
// const b = 13

// console.log(a == b)

// function isEqual(x,y) {
//     return x === y
// }

// console.log(isEqual(1,1))
// console.log(isEqual(1,5))
// console.log(isEqual(2,'2'))

// const c = 1 
// const d = 3

// console.log(c !== d)
// console.log(c < d)
// console.log(c > d)
// console.log(c >= d)
// console.log(c <= d)

// 논리 연산자 (logical operator)
// const a = 1 === 1
// const b = 'ab' === 'ab'
// const c = false

// console.log(a)
// console.log(b)
// console.log(c)

// console.log(a,b,c)
// console.log('&&: ', a && b && c)
// console.log('||: ', a || b || c)
// console.log('!: ', !a)

// 삼항 연산자 (ternary operator)
// const a = 1 < 2

// if (a){
//     console.log('참')
// } else{
//     console.log('거짓')
// }

// console.log(a? '참' : '거짓')

// 조건문 (If statement)
// import random from './getRandom'

// const a = random();

// if(a === 0){
//     console.log('a is 0')
// }else if(a === 2) {
//     console.log('a is 2')
// }else if(a === 4) {
//     console.log('a is 4')
// }else{
//     console.log('rest...')
// }

// 조건문 (Switch statement)
// import random from './getRandom'

// const a = random();

// switch(a){
//     case 0:
//         console.log('a is 0')
//         break
//     case 2:
//         console.log('a is 2')
//         break
//     case 4:
//         console.log('a is 4')
//         break
//     default:
//         console.log('rest...')
// }

// 반복문 (For statement)

// const ulEl = document.querySelector('ul')

// for( let i = 0; i < 10; i += 1){
//     const li = document.createElement('li')
//     li.textContent = `list-${i+1}`
//     if((i+1) % 2 === 0){
//         li.addEventListener('click',function(){
//             console.log(li.textContent)
//         })
//     }
//     ulEl.appendChild(li)
// }

// 변수 유효범위(Variable Scope)

// // Refer Error!
// function scope(){
//     if(true){
//         const a = 123
//     }
//     console.log(a)
// }
// scope()

// // Undefined Error!
// function scope(){
//     if(true){
//         console.log(a)
//         const a = 123
//     }
// }
// scope()

// // Refer Error!
// function scope(){
//     console.log(a)
//     if(true){
//         const a = 123
//     }
// }
// scope()

// // let과 const는 블록 레벨의 유효범위를 가진다.

// // Undefined Error!
// function scope(){
//     console.log(a)
//     if(true){
//         var a = 123
//     }
// }
// scope()

// // 정상 출력
// function scope(){
//     if(true){
//         var a = 123
//     }
//     console.log(a)
// }
// scope()

// 형 변환(Type conversion)

// const a = 1
// const b = '1'

// console.log(a === b)
// console.log(a == b)

// // Truthy (참 같은 값)
// // true,{}, [], 1, 2, 'false', -1, '3.14' ...

// // Falsy (거짓 같은 값)
// // false, '', null, undefined, 0, -0, NaN

// if(false){
//     console.log('ture')
// }

// 함수 복습

// function sum(x, y){
//     console.log(x + y)
//     return x + y
// }

// sum(1,3)
// sum(4,12)

// const a = sum (100,300)
// const b = sum (300,600)

// console.log(a)
// console.log(b)
// console.log(a+b)

// console.log(sum(100,300) + sum(300,600))

// ------------------------ 

// function sum_name(x, y){
//     return x+y
// }

// sum_name(1,3)

// const sum_noname = function(x, y){
//     return x+y
// }

// sum_noname(1,3)

// --------------------------

// function sum(){
//     console.log(arguments)
//     return arguments[0] + arguments[1]
// }
// console.log(sum(7,13))

// 화살표 함수
// const double = function (x){
//     return x*2
// }
// console.log('double: ', double(7))

// const doubleArrow = (x) => {
//     return x * 2
// }
// const doubleArrow_con = (x) => x * 2
// const doubleArrow_con_v2 = x => x * 2
// const doubleArrow_con_v3 = x => 1234
// const doubleArrow_con_v4 = x => {return x * 2}
// const doubleArrow_con_v5 = x => ({name:'dyonyon'})
// console.log('doubleArrow: ', doubleArrow_con(7))

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression

// const a = 7
// function double(){
//     console.log(a*2)
// }
// double();

// (function(){
//     console.log(a*2)
// })();
// (function(){
//     console.log(a*2)
// }())

// 호이스팅(Hoising)

// const a = 7

// double()

// const double = function() {
//     console.log(a*2)
// }
// // => Error 발생

// const a = 7

// double()

// function double() {
//     console.log(a*2)
// }
// // => 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상


// 타이머 함수

// const timer_1 = setTimeout(function() {
//     console.log('dyonyon')
// }, 3000)
// const timer_2 = setTimeout(()=>{
//     console.log('dyonyon!!')
// }, 5000)

// const h1El_1 = document.querySelector('h1')
// h1El_1.addEventListener('click',() => {
//     clearTimeout(timer_1)
// })

// const timer3 = setInterval(function() {
//     console.log('dyonyon!!!')
// }, 3000)

// const h1El_2 = document.querySelector('h1')
// h1El_2.addEventListener('click',() => {
//     clearInterval(timer3)
// })

// 콜백(Callback)

// function timeout(callback) {
//     setTimeout(()=>{
//         console.log('dyonyon!')
//         callback()
//     }, 3000)
// }
// timeout(()=>{
//     console.log('Done!')
// })

// JS 클래스

// const dyonyon = {
//     firstName: 'dyonyon',
//     lastName: 'Choi',
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(dyonyon)
// console.log(dyonyon.getFullName())

// const sojoong = {
//     firstName: 'sojoong',
//     lastName: 'Lee',
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(sojoong)
// console.log(sojoong.getFullName())

// const jongwon = {
//     firstName: 'jongwon',
//     lastName: 'Choi',
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(jongwon)
// console.log(jongwon.getFullName())
// 효율 떨어짐...!!   => 클래스 사용

// function user(first, last){
//     this.firstName = first
//     this.lastName = last
// }
// user.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// const dyonyon_c = new user('dyonyon','Choi')
// const sojoong_c = new user('sojoong','Lee')
// const jongwon_c = new user('jongwon','Choi')

// console.log(dyonyon)
// console.log(dyonyon.getFullName())


// this

// const dyonyon = {
//     name:'Dyonyon',
//     normal: function(){
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }
// dyonyon.normal()
// dyonyon.arrow()

// const sojoong = {
//     name:'Sojoong',
//     normal: dyonyon.normal,
//     arrow: dyonyon.arrow
// }
// sojoong.normal()
// sojoong.arrow()


// function User(name){
//     this.name = name
// }
// User.prototype.normal = function() {
//     console.log(this.name)
// }
// User.prototype.arrow = () => {
//     console.log(this.name)
// }

// const dyonyon = new User('Dyonyon')

// dyonyon.normal()
// dyonyon.arrow()


// const timer = {
//     name:'Dyonyon!!',
//     timeout:function(){
//         setTimeout(function() {
//             console.log(this.name)
//         },2000)
//     }
// }
// timer.timeout()

// const timer1 = {
//     name:'Dyonyon!!',
//     timeout:function(){
//         setTimeout(() => {
//             console.log(this.name)
//         },2000)
//     }
// }
// timer1.timeout()


// ES6 Classes

// const dyonyon = {
//     name:'Dyonyon',
//     normal: function(){                      //     normal(){   과 동일! (축약형)
//         console.log(this.name)
//     },
//     arrow: () => {
//         console.log(this.name)
//     }
// }
// dyonyon.normal()
// dyonyon.arrow()



// 앞서 배운 클래스
// function User(first, last){
//     this.firstName = first
//     this.lastName = last
// }
// User.prototype.getFullName = function(){
//     return `${this.firstName} ${this.lastName}`
// }

// ES6에서 만든 클래스 문법

// class User {
//     constructor(first, last) {                   // constructor : function(first,last) {}  와 동일
//         this.firstName = first
//         this.lastName = last
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }

// const dyonyon = new User('dyonyon','Choi')
// const sojoong = new User('sojoong','Lee')
// const jongwon = new User('jongwon','Choi')

// console.log(dyonyon)
// console.log(dyonyon.getFullName())
// console.log(sojoong.getFullName())

// 상속 (확장)

class Vehicle{
    constructor(name,wheel){
        this.name = name
        this.wheel = wheel
    }
}
const myVehicle = new Vehicle('운송수단',2)
console.log(myVehicle)

class Bicycle extends Vehicle{
    constructor(name,wheel){
        super(name,wheel)
    }
}
const myBicycle = new Bicycle('자전거',2)
const herBicycle = new Bicycle('세발',3)
console.log(myBicycle)
console.log(herBicycle)

class Car extends Vehicle{
    constructor(name,wheel,license){
        super(name,wheel)
        this.license = license
    }
}
const myCar = new Car('차',4,true)
const herCar = new Car('포르쉐',4,false)
console.log(myCar)
console.log(herCar)
