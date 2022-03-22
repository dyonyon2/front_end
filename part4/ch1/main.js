// JS 데이터

const { FORMERR } = require("dns")

// String: "", '', ``
// Number
// Bollean: true, false
// undefined
// null
// Array: []
// Object: {}

// // 문자
// // length 메소드 (문자열 길이 반환)
// const str1 = '0123'
// console.log(str1.length)
// console.log('01 234'.length)
// console.log(' '.length)

// // indexOf 메소드 (단어 검색하여 인덱스 반환)
// const str2 = 'hello world!'
// console.log(str2.indexOf('!'));
// console.log('hello world!'.indexOf('world'));
// console.log('hello world!'.indexOf('dyonyon'));
// console.log(('hello world!'.indexOf('dyonyon')!==-1));

// // slice 메소드 (첫 인수~두번째 인수-1까지의 문자열 반환)
// const str3 = 'Hello world!'
// console.log(str3.slice(0,3))
// console.log(str3.slice(6,11))

// // replace 메소드 (첫 인수의 데이터를 두번째 인수의 데이터로 변경하여 반환)
// const str4 = 'Hello world!'
// console.log(str4.replace('world','dyonyon'))
// console.log(str4.replace('Hello ',''))
// console.log(str4.replace(' world!',''))

// // match 메소드 (특정한 문자 데이터를 정규 표현식으로 일치시켜서 배열 데이터로 반환)
// const str5 = 'jychoi9712@naver.com'
// console.log(str5.match(/.+(?=@)/))              // 정규 표현식
// console.log(str5.match(/.+(?=@)/)[0])

// // trim 메소드 (문자열의 앞 뒤 공백을 제거하여 반환)
// const str6 = '         hello world    '
// console.log(str6)
// console.log(str6.trim())





// // 숫자와 수학
// // toFixed 메소드 (숫자 데이터의 소수점 첫번째 인수까지 받아 문자 데이터로 반환 )
// const pi = 3.14159265358979
// console.log(pi)

// const str = pi.toFixed(2)
// console.log(str)
// console.log(typeof str)

// // parseInt 메소드 (문자 데이터를 정수로 변환하여 반환)
// // parseFloat 메소드 (문자 데이터를 소수로 변환하여 반환)
// const integer = parseInt(str)
// const float = parseFloat(str)
// console.log(integer)
// console.log(float)
// console.log(typeof integer, typeof float)

// // Math.abs 메소드 (절대값 반환)
// console.log('abs: ', Math.abs(-12))
// // Math.min 메소드 (인수들중 최소값 반환)
// console.log('min: ', Math.min(2,8))
// // Math.max 메소드 (인수들중 최대값 반환)
// console.log('max: ', Math.max(2,8))
// // Math.ceil 메소드 (정수 단위 올림하여 반환)
// console.log('ceil: ', Math.ceil(3.14))
// // Math.floor 메소드 (정수 단위 내림하여 반환)
// console.log('floor: ', Math.floor(3.14))
// // Math.round 메소드 (정수 단위 반올림하여 반환)
// console.log('round: ', Math.round(3.14))
// // Math.random 메소드 (무작위 난수 반환)
// console.log('random: ', Math.random())

// function radom() {
//     return Math.floor(Math.random()*10)
// }




// 배열
// index(인덱스), element or item (요소)
// const numbers = [1,2,3,4]
// const fruits = ['Apple','Banana', 'Cherry']
// console.log(numbers)
// console.log(numbers[1])
// console.log(fruits)
// console.log(fruits[2])

// // .length 메소드 (배열의 길이 반환)
// console.log(numbers.length)
// console.log(fruits.length)
// console.log([1,2].length)
// console.log([].length)

// // .concat 메소드 (두개의 배열 데이터를 합하여 새로운 배열 데이터를 반환. 원본 데이터 손상 X)
// console.log(numbers.concat(fruits))

// // .forEach 메소드 (배열 데이터의 아이템 개수만큼 콜백함수가 실행되며 각 요소에 인덱스로 접근하여 콜백 함수를 실행한다.)
// fruits.forEach(function(element,index,array){
//     console.log(element,index,array)
// })

// // .map 메소드 (배열 데이터의 아이템 개수만큼 콜백함수가 실행되며, 콜백에서 반환된 특정 데이터를 기준으로 그 데이터의 모음인 새로운 배열을 반환한다.)
// // const a = fruits.forEach((fruit, index) => {
// const a = fruits.forEach(function (fruit, index) {
//     console.log(`${fruit}-${index}`)
// })
// console.log(a)

// // const b = fruits.map((fruit, index) => {
// //     return `${fruit}-${index}`
// // })
// const b = fruits.map(function (fruit, index) {
//     return `${fruit}-${index}`
// })
// console.log(b)

// // const c = fruits.map((fruit, index) => ({
// //     id: index,
// //     name: fruit
// // }))
// const c = fruits.map(function (fruit, index) {
//     return {
//         id: index,
//         name: fruit
//     }
// })
// console.log(c)

// .filter 메소드 (배열 데이터의 아이템들을 특정 기준을 통해 필터링하여 필터링된 결과를 새로운 배열로 반환한다.)
// const numbers = [1,2,3,4]
// const fruits = ['Apple','Banana', 'Cherry']

// // const a = numbers.map(number => number < 3)
// const a = numbers.map(number => {
//     return number < 3
// })
// console.log(a)

// // const b = numbers.filter(number => number <3)
// const b = numbers.filter(number => {
//     return number <3
// })
// console.log(b)


// .find 메소드 (배열 데이터들을 돌면서 판별 함수(정규 표현식)를 만족하는 첫 번째 요소의 값을 반환)
// .findIndex 메소드 (find로 찾은 데이터의 인덱스를 반환한다.)
// const numbers = [1,2,3,4]
// const fruits = ['Apple','Banana', 'Cherry']

// // const a = fruits.find(fruit => /^B/.test(fruit))
// const a = fruits.find(fruit => { 
//     return /^B/.test(fruit)
// })
// console.log(a)

// // const b = fruits.findIndex(fruit => /^B/.test(fruit))
// const b = fruits.findIndex(fruit => { 
//     return /^B/.test(fruit)
// })
// console.log(b)

// .includes 메소드 (배열 데이터에 인수가 포함되어 있는지 true/false 반환한다.)
// const numbers = [1,2,3,4]
// const fruits = ['Apple','Banana', 'Cherry']

// const a =numbers.includes(3)
// console.log(a)

// const b = fruits.includes('dyonyon')
// console.log(b)

// .push 메소드 (배열 데이터의 맨 뒤 인덱스에 인수를 추가하여 원본 데이터를 수정한다)
// .unshift 메소드 (배열 데이터의 맨 앞 인덱스에 인수를 추가하여 원본 데이터를 수정한다)
// const numbers = [1,2,3,4]
// const fruits = ['Apple','Banana', 'Cherry']

// numbers.push(5)
// console.log(numbers)

// numbers.unshift(0)
// console.log(numbers)

// .reverse 메소드 (배열 데이터의 순서를 뒤집어 원본 배열 데이터를 수정한다.)
// const numbers = [1,2,3,4]
// const fruits = ['Apple','Banana', 'Cherry']

// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)

// .splice 메소드 (배열 데이터의 첫번째 인수 인덱스에서 두번째 인수만큼 데이터 ~개를 지운다. 세번째 인수는 그 자리에 세번째 인수를 추가한다)

// const numbers = [1,2,3,4]
// const fruits = ['Apple','Banana', 'xxx', 'Cherry']

// numbers.splice(2,0,999)
// numbers.splice(4,1,999)
// console.log(numbers)

// fruits.splice(2,1,'Orange')
// console.log(fruits)



// 객체
// Object.assign 메소드 (첫번째 인수를 타겟 객체, 두번째 인수를 참조 객체로 보고 타겟 객체들의 속성들을 복사하여 타겟 객체에 붙여넣은 뒤 타겟 객체를 반환한다.)
// const userAge = {
//     name: "dyonyon",
//     age : 26
// }

// const userEmail = {
//     name: "dyonyon",
//     email: "jychoi9712@naver.com"
// }

// const target = Object.assign(userAge,userEmail)
// console.log(target)
// console.log(userAge)
// console.log(userEmail)
// console.log(target === userAge)
// const target2 = Object.assign({},userAge,userEmail)
// console.log(target2 === userAge)

// const a = { k: 123}
// const b = { k: 123}
// console.log(a === b)

// Object.keys 메소드 (객체 데이터의 속성 값들을 추출하여 배열 데이터로 반환. 이 데이터를 활용하여 인덱싱 기법으로 활용한다.)
// const user = {
//     name: "dyonyon",
//     age : 26,
//     email: "jychoi9712@naver.com"
// }

// const keys = Object.keys(user)
// console.log(keys)

// console.log(user['email'])

// const values = keys.map(key => user[key])
// console.log(values)

// 구조 분해 할당 (Destructuring assignment,  비구조화 할당)
// (데이터를 구조 분해하여 원하는 속성들을 꺼내어 각각의 변수로 만들어 사용한다.)
// const user = {
//     name: "dyonyon",
//     age : 26,
//     email: "jychoi9712@naver.com",
//     address: "USA"
// }
// const { name, age, email, address = 'Korea'} = user

// console.log(`사용자의 이름은 ${name}입니다.`)
// console.log(`${name}의 나이는 ${age}입니다.`)
// console.log(`${name}의 이메일 주소는 ${email}입니다.`)
// console.log(address)

// const fruits = ['Apple', 'Banana', 'Cherry']
// const [a,b,c,d] = fruits
// console.log(a,b,c,d)
// const [,b1] = fruits
// console.log(b1)


// 전개 연산자 (Spread) (배열 데이터를 쉼표로 구분하는 아이템으로 전개해서 출력한다.)
// 배열 데이터를 쉼표로 구분하여 전개하는 방식, 매개변수에서 나머지 매개변수로 사용
// const fruits = ['Apple', 'Banana', 'Cherry','Orange']
// console.log(fruits)
// console.log(...fruits)
// // console.log('Apple','Banan',"Cherry","Orange")

// // function toObject = (a,b,...c) => ({a,b,c})      축약형
// function toObject(a,b,...c){            //나머지 매개변수 (rest parameter)
//     return {
//         a,
//         // a:a
//         b,
//         // b:b
//         c
//         // c:c
//     }
// }
// console.log(toObject(...fruits))
// // console.log(toObject(fruits[0],fruits[1],fruits[2]))



// 데이터 불변성 (Immutability)
// 원시 데이터 : String, Number, Boolean, undefined, null
// 참조형 데이터 : Object, Array, Function
// let a = 1
// let b = 4
// console.log(a, b, a === b)
// b = a
// console.log(a, b, a === b)
// a = 7
// console.log(a, b, a === b)
// let c = 1
// console.log(b, c, b === c)
// 원시 데이터는 기존 메모리에 있다면 새롭게 만드는 것이 아니라 기존 메모리 주소를 바라보게 한다.

// 참조형 데이터는 불변하지 않기 때문에, 선언할 때마다 새로운 메모리 주소에 참조형 데이터가 할당된다. 
// 생김새가 똑같더라도 같은 데이터가 아닐 수 있다. 그래서 한쪽을 수정하면 다른쪽도 수정되는 상황이 생긴다.
// let a = { k: 1}
// let b = { k: 1}
// console.log(a, b, a === b)
// a.k = 7
// b = a
// console.log(a, b, a === b)
// a.k = 2
// console.log(a, b, a === b)
// let c = b
// console.log(a, b, c, a === c)
// a.k = 9
// console.log(a,b,c, a === c)


// 얕은 복사 (Shallow copy), 깊은 복사 (Deep copy)
// const user = {
//     name: "dyonyon",
//     age : 26,
//     email: "jychoi9712@naver.com"
// }

// const copyUser = user
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user)
// console.log('copyUser', copyUser)

// console.log('---------')
// console.log('---------')
// 바라보는 메모리가 같아 데이터가 의도치 않게 변경되는 문제가 발생

// 객체 assign 메소드 이용
// const user = {
//     name: "dyonyon",
//     age : 26,
//     emails: ["jychoi9712@naver.com"]
// }

// const copyUser = Object.assign({}, user)
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user)
// console.log('copyUser', copyUser)

// console.log('---------')
// console.log('---------')

// user.emails.push("jychoi9712@gmail.com")
// console.log(user.emails === copyUser.emails)
// console.log('user', user)
// console.log('copyUser', copyUser)


// 전개 연산자 사용
// const user = {
//     name: "dyonyon",
//     age : 26,
//     emails: ["jychoi9712@naver.com"]
// }

// const copyUser = {...user}
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user)
// console.log('copyUser', copyUser)

// console.log('---------')
// console.log('---------')

// user.emails.push("jychoi9712@gmail.com")
// console.log(user.emails === copyUser.emails)
// console.log('user', user)
// console.log('copyUser', copyUser)



// 깊은 복사
import _ from 'lodash'

const user = {
    name: "dyonyon",
    age : 26,
    emails: ["jychoi9712@naver.com"]
}

const copyUser = _.cloneDeep(user)
console.log(copyUser === user)

user.age = 22
console.log('user', user)
console.log('copyUser', copyUser)

console.log('---------')
console.log('---------')

user.emails.push("jychoi9712@gmail.com")
console.log(user.emails === copyUser.emails)
console.log('user', user)
console.log('copyUser', copyUser)

