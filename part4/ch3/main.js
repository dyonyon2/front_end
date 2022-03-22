let str = `
010-1234-5678
jychoi9712@naver.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

// // 정규식 생성
// // 처음 만난 the 찾기
// // const regexp1 = new RegExp('the','')
// const regexp1 = /the/
// console.log(str.match(regexp1))

// // 모든 the 찾기 g
// // const regexp2 = new RegExp('the','g')
// const regexp2 = /the/g
// console.log(str.match(regexp2))

// // 대소문자 상관 없이 i
// // const regexp3 = new RegExp('the','gi')
// const regexp3 = /the/gi
// console.log(str.match(regexp3))




// 자바스크립트 메소드 (test, match, replace)
// const regexp = /fox/gi
// console.log(regexp.test(str))
// console.log(str.replace(regexp, 'AAA'))
// console.log(str)
// str = str.replace(regexp, 'AAA')
// console.log(str)



// 플래그(옵션)
// const regexp1 = /the/
// console.log(str.match(regexp1))
// const regexp2 = /the/g
// console.log(str.match(regexp2))
// const regexp3 = /the/gi
// console.log(str.match(regexp3))
// console.log(str.match(/the/gi))

// console.log(str.match(/\./gi))
// console.log(str.match(/\.$/gi))
// console.log(str.match(/\.$/gim))



// 패턴(표현)
console.log(
    str.match(/d$/gm)
)

console.log(
    str.match(/^t/gim)
)

console.log(
    str.match(/http/g)
)
console.log(
    str.match(/h..p/g)
)

console.log(
    str.match(/fox|dog/)
)
console.log(
    str.match(/fox|dog/g)
)

console.log(
    str.match(/https/g)
)
console.log(
    str.match(/https?/g)
)

console.log(
    str.match(/d{1}/g)
)
console.log(
    str.match(/d{2}/)
)
console.log(
    str.match(/d{2}/g)
)
console.log(
    str.match(/d{2,}/g)
)
console.log(
    str.match(/d{2,3}/g)
)
console.log(
    str.match(/\w{2,5}/g)
)
console.log(
    str.match(/\b\w{2,5}\b/g)
)

console.log(
    str.match(/[fox]/g)
)
console.log(
    str.match(/[0-9]/g)
)
console.log(
    str.match(/[0-9]{1,}/g)
)
console.log(
    str.match(/[가-힣]{1,}/g)
)

console.log(
    str.match(/\w/g)
)
console.log(
    str.match(/\b/g)
)
console.log(
    str.match(/\bf\w{1,}\b/g)
)
console.log(
    str.match(/\d/g)
)
console.log(
    str.match(/\d{1,}/g)
)
console.log(
    str.match(/\s/g)
)

const h = `  the hello world   !

`
console.log(
    h.replace(/\s/g, '')
)


console.log(
    str.match(/.{1,}(?=@)/g)
)
console.log(
    str.match(/(?<=@).{1,}/g)
)
