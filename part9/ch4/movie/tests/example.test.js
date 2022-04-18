// 첫 테스트
// import { double } from './example'

// test('첫 테스트', () => {
//     expect(123).toBe(123)
// })

// test('인수가 숫자 데이터입니다', () => {
//     expect(double(3)).toBe(6)
//     expect(double(10)).toBe(20)
//     expect(double(7)).toBe(14)
//     // expect(double(5)).toBe(10.5)
//     // expect(double(0)).toBe(1)
// })

// test('인수가 없습니다', () => {
//     expect(double()).toBe(0)
// })



// // Jest Global
// import { double } from './example'

// // 테스트를 묶는 그룹
// describe('그룹 1', () => {
//     // 모든 테스트가 시작하기 전에 단 한번만 동작 
//     beforeAll(() => {
//         console.log('beforeAll')
//     })
//     // 모든 테스트의 다음에 단 한번만 동작
//     afterAll(()=>{
//         console.log('afterAll')
//     })
//     // 각각의 테스트가 동작하기 직전에 한번씩 동작
//     beforeEach(()=>{
//         console.log('beforeEach')
//     })
//     // 각각의 테스트가 동작한 이후에 한번씩 동작 
//     afterEach(()=>{
//         console.log('afterEach')
//     })

//     test('테스트 이름1', ()=>{
//         console.log('첫 테스트')
//         expect(123).toBe(123)
//     })

//     test('테스트 이름2', ()=>{
//         console.log('인수가 숫자 데이터입니다!')
//         expect(double(3)).toBe(6)
//     })

//     test('테스트 이름3', ()=>{
//         console.log('인수가 없습니다!')
//         expect(double()).toBe(0)
//     })
// })

// describe('그룹 2', () => {
//     // 모든 테스트가 시작하기 전에 단 한번만 동작 
//     beforeAll(() => {
//         console.log('beforeAll')
//     })
//     // 모든 테스트의 다음에 단 한번만 동작
//     afterAll(()=>{
//         console.log('afterAll')
//     })
//     // 각각의 테스트가 동작하기 직전에 한번씩 동작
//     beforeEach(()=>{
//         console.log('beforeEach')
//     })
//     // 각각의 테스트가 동작한 이후에 한번씩 동작 
//     afterEach(()=>{
//         console.log('afterEach')
//     })

//     test('테스트 이름1', ()=>{
//         console.log('첫 테스트')
//         expect(123).toBe(123)
//     })

//     test('테스트 이름2', ()=>{
//         console.log('인수가 숫자 데이터입니다!')
//         expect(double(3)).toBe(6)
//     })

//     test('테스트 이름3', ()=>{
//         console.log('인수가 없습니다!')
//         expect(double()).toBe(0)
//     })
// })




// // Jest Matchers
// const userA = {
//     name: 'Dyonyon',
//     age: 26
// }

// const userB = {
//     name: 'Sojoong',
//     age: 25
// }

// test('데이터가 일치해야 합니다', () => {
//     expect(userA.age).toBe(26)
//     expect(userA).toEqual({
//         name: 'Dyonyon',
//         age: 26
//     })
// })

// test('데이터가 일치하지 않아야 합니다', () => {
//     expect(userB.name).not.toBe('Dyonyon')
//     expect(userB).not.toBe(userA)
// })



// 비동기 테스트
// import { asyncFn } from "./example"

// describe('비동기 테스트', () => {
//     test('done', (done) => {
//         asyncFn().then(res => {
//             expect(res).toBe('Done')
//             done()
//         })
//     })

//     test('then', () => {
//         return asyncFn().then(res=> {
//             expect(res).toBe('Done')
//         })
//     })

//     test('resolves', () => {
//         return expect(asyncFn()).resolves.toBe('Done')
//     })
//     test('resolves', () =>  expect(asyncFn()).resolves.toBe('Done'))

//     test('async/await',async()=>{
//         const res = await asyncFn()
//         expect(res).toBe('Done')
//     })


// })



// // 모의(Mock) 함수
// import * as example from "./example"

// describe('비동기 테스트', () => {
//     test('async/await', async () => {
//         jest.spyOn(example, 'asyncFn').mockResolvedValue('Done')
//         const res = await example.asyncFn()
//         expect(res).toBe('Done')
//     }, 7000)
// })

// 모의(Mock) 함수2
// import { fetchMovieTitle } from "./example"
// import axios from 'axios'

// describe('비동기 테스트', () =>{
//     test('영화 제목 변환', async () => {
//         axios.get = jest.fn(()=>{
//             return new Promise(resolve => {
//                 resolve({
//                     data: {
//                         Title: 'Frozen II'
//                     }
//                 })
//             })
//         })
//         const title = await fetchMovieTitle()
//         expect(title).toBe('Frozen ii')
//     })
// })
// 
// describe('비동기 테스트', () =>{
//     test('영화 제목 변환', async () => {
//         axios.get = jest.fn(()=>{
//             return new Promise(resolve => {
//                 resolve({
//                     data: {
//                         Title: 'Frozen II'
//                     }
//                 })
//             })
//         })
//         const title = await fetchMovieTitle()
//         expect(title).toBe('Frozen ii')
//     })
// })



// VTU (Vue Test Utils)
import {mount} from '@vue/test-utils'
import Example from './Example.vue'

test('메시지를 변경합니다', async () => {
    // mount(component, options)
    const wrapper = mount(Example)
    expect(wrapper.vm.msg).toBe('Hello Vue test utils!!!')

    // 반응성 유지 안됨!
    // wrapper.vm.msg = 'Hello dyonyon!'
    // expect(wrapper.vm.msg).toBe('Hello dyonyon!')
    // expect(wrapper.find('div').text()).toBe('Hello dyonyon!')

    // 반응성 유지
    await wrapper.setData({
        msg: 'Hello dyonyon!'
    })
    expect(wrapper.vm.msg).toBe('Hello dyonyon!')
    expect(wrapper.find('div').text()).toBe('Hello dyonyon!')
})
