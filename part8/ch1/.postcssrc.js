// 브라우저에서 ESM => import export 사용
// node js에서는 CommonJS => require() module.exports 사용

// import autoprefixer from 'autoprefixer'

// export {
    // Plugins: [
    //     autoprefixer
    // ]
// }


// const autoprefixer = require('autoprefixer')

// module.exports = {
//     Plugins: [
//         autoprefixer
//     ]
// }

// 간소화
module.exports = {
    Plugins: [
        require('autoprefixer')
    ]
}
