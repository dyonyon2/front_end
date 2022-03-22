// 데이터 가져오기/내보내기

// import _ from 'lodash'
// import getType from './getType'
// // import {random, user as dyonyon } from './getRandom'
// import * as R from './getRandom'

// console.log(_.camelCase('the hello world'))
// console.log(getType([1,2,3]))
// // console.log(random(), random())
// console.log(R)


// Lodash 사용법

// // uniqBy 메소드 (첫번째 인수로 배열 데이터를 넣어주고, 두번째 인수로는 중복을 구분할 고유한 속성을 넣어주면, 중복이 없는 배열 데이터를 반환)
// // unionBy 메소드 (첫번째 인수, 두번째 인수는 합칠 데이터를 넣고, 세번째 인수로는 고유 값으로 설정할 속성을 넣어주어 중복이 없는 배열 데이터를 반환)
// import _ from 'lodash'

// const usersA = [
//     {userId: '1', name: 'dyonyon'},
//     {userId: '2', name: 'sojoong'}
// ]
// const usersB = [
//     {userId: '1', name: 'dyonyon'},
//     {userId: '3', name: 'won'}
// ]

// const usersC = usersA.concat(usersB)
// console.log('concat', usersC)
// console.log('uniqBy', _.uniqBy(usersC,'userId'))

// const usersD = _.unionBy(usersA, usersB, 'userId')
// console.log('unionBy', usersD)

// // .find / .findIndex (배열에서 특정 조건을 갖춘 데이터/데이터의 인덱스 를 찾아서 반환한다. 첫번째 인수로는 배열 데이터, 두번째 인수로는 특정 조건을 넣는다.)
// // .remove (배열에서 특정 조건을 갖춘 데이터를 찾아서 제거한다. 첫번째 인수로는 배열 데이터, 두번째 인수로는 특정 조건을 넣는다.)
// import _ from 'lodash'

// const users = [
//     {userId: '1', name: 'dyonyon'},
//     {userId: '2', name: 'sojoong'},
//     {userId: '3', name: 'won'},
//     {userId: '4', name: 'hyeok'},
//     {userId: '5', name: 'hun'}
// ]

// const foundUser = _.find(users, {name:'won'})
// const foundUserIndex = _.findIndex(users, {name:'won'})
// console.log(foundUser)
// console.log(foundUserIndex)

// _.remove(users, {name: 'dyonyon'})
// console.log(users)



// JSON (JavaScript Object Notation)
// import myData from './myData.json'

// console.log(myData)

// const user = {
//     name: 'dyonyon',
//     age: 26,
//     emails: [
//         'jychoi9712@naver.com',
//         'jychoi9712@gmail.com'
//     ]
// }
// console.log('user', user)

// const str = JSON.stringify(user)
// console.log('str',str)
// console.log(typeof str)

// const obj = JSON.parse(str)
// console.log('obj', obj)
// console.log(typeof obj)


// Storage
// const user = {
//     name: 'dyonyon',
//     age: 26,
//     emails: [
//         'jychoi9712@naver.com',
//         'jychoi9712@gmail.com'
//     ]
// }

// localStorage.setItem('user', JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')

// localStorage.setItem('user', JSON.stringify(user))
// const str = localStorage.getItem('user')
// const obj = JSON.parse(str)
// console.log(obj)
// obj.age = 22
// console.log(obj)
// localStorage.setItem('user',JSON.stringify(obj))



// OMDb API & axios

import axios from 'axios'

function fetchMovies(){
    axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res=>{
        console.log(res)
        const h1El =document.querySelector('h1')
        const imgEl =document.querySelector('img')
        h1El.textContent = res.data.Search[0].Title
        imgEl.src = res.data.Search[0].Poster

    })
}
fetchMovies()
