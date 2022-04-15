//  콜백 함수
// function a(callback) {
//     setTimeout(() => {
//         console.log('A')
//         callback()
//     }, 1000);
// }
// function b(callback) {
//     setTimeout(() => {
//         console.log('B')
//         callback()
//     }, 1000);
// }

// a(function() {
//     b(function(){
//         console.log('Done!')
//     })
// })



// Promise 객체 (with async await)
// function a(){
//     // promise: 약속의 객체!
//     return new Promise(function (resolve){
//         setTimeout(() => {
//             console.log('A')
//             resolve("Hello A")
//         }, 1000);
//     })
// }
// function b(){
//     // promise: 약속의 객체!
//     return new Promise(function (resolve){
//         setTimeout(() => {
//             console.log('B')
//             resolve("Hello B")
//         }, 1000);
//     })
// }
// function c(){
//     // promise: 약속의 객체!
//     return new Promise(function (resolve){
//         setTimeout(() => {
//             console.log('C')
//             resolve("Hello C")
//         }, 1000);
//     })
// }
// function d(){
//     // promise: 약속의 객체!
//     return new Promise(function (resolve){
//         setTimeout(() => {
//             console.log('D')
//             resolve("Hello D")
//         }, 1000);
//     })
// }

// async function test() {
//     const h1 = await a()
//     const h2 = await b()
//     const h3 = await c()
//     const h4 = await d()
//     console.log('Done!')
//     console.log(h1, h2, h3, h4)
// }
// test()





// Promise then 사용! (without async & await!)
// function a() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log('A')
//             resolve()
//         }, 1000);
//     })
// }
// function b() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log('B')
//             resolve()
//         }, 1000);
//     })
// }
// function c() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log('C')
//             resolve()
//         }, 1000);
//     })
// }
// function d() {
//     return new Promise((resolve)=>{
//         setTimeout(() => {
//             console.log('D')
//             resolve()
//         }, 1000);
//     })
// }

// function test() {
// //     a().then(()=>{
// //         b().then(()=>{
// //             c().then(()=>{
// //                 d().then(()=>{
// //                     console.log('Done!')
// //                 })
// //             })
// //         })
// //     })

//     // a().then(()=>{
//     //     return b()
//     // }).then(()=>{
//     //     return c()
//     // }).then(()=>{
//     //     return d()
//     // }).then(()=>{
//     //     console.log('Done!')
//     // })
//     a()
//         .then(()=>b())
//         .then(()=>c())
//         .then(()=>d())
//         .then(()=>{
//             console.log('Done!')
//         })
// }



// // Promise catch & finally 사용 + async&await에서 catch와 finally 부분 정리
// function a(number) {
//     return new Promise((resolve,reject)=>{
//         if(number > 4){
//             reject()
//             return
//         }
//         setTimeout(() => {
//             console.log('A')
//             resolve()
//         }, 1000);
//     })
// }
// async function test(){
//     // a(5)
//     //     .then(()=>{
//     //         console.log('resolve!')
//     //     })
//     //     .catch(()=>{
//     //         console.log('reject!')
//     //     })
//     //     .finally(()=>{
//     //         console.log('Done!')
//     //     })

//     try{
//         await a(8)
//         console.log('Resolve!')
//     }catch(error){
//         console.log('Reject!')
//     }finally{
//         console.log('Done!')
//     }

// }
// test()




// API 비동기 처리
function fetchMovies(title) {
    const OMDB_API_KEY = '7035c60c'
    return new Promise(async (resolve,reject)=>{
        try{
            const res = await axios.get(`https://omdbapi.com?apikey=${OMDB_API_KEY}&s=${title}`)
            // console.log(res)
            resolve(res)
        }catch(error){
            console.log(error.message)
            reject('Dyonyon?!')
        }
    })
}

async function test(){
    try{
        const res = await fetchMovies('Frozen')
        console.log(res)        
    }catch(dyonyon){
        console.log(dyonyon)
    }
}

test()

function hello() {
    fetchMovies('jobs')
        .then(res=>console.log(res))
        .catch(dyonyon=>{console.log(dyonyon)})
}
hello()