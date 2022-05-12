// export function double(num){
//     if(!num){
//         return 0
//     }
//     return num * 2
// }



// // 비동기 테스트
// import axios from "axios"
// import { resolve } from "../webpack.config"
// export function asyncFn() {
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve('Done')
//         }, 2000)
//     })
// } 



// Mock 함수
// import axios from "axios"
// import { resolve } from "../webpack.config"
// export function asyncFn() {
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve('Done')
//         }, 7000)
//     })
// } 


// Mock 함수 2
import axios from "axios"
import _upperFirst from 'lodash/upperFirst'
import _toLower from 'lodash/toLower'

export async function fetchMovieTitle() {
    const res = await axios.get('https://omdbapi.com?apikey=7035c60c&i=tt4520988')
    // return res.data.Title 
    
    // Frozen II -> frozen ii -> Fronzen ii
    return _upperFirst(_toLower(res.data.Title))
}