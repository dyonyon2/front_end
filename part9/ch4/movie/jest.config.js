module.exports = {

    // 파일 확장자를 지정하지 않는 경우, jest가 검색할 확장자 목록
    // ex) import "/scss/main"
    moduleFileExtensions: [
        'js',
        'vue'
    ],

    // '~' 같은 경로 별칭을 매핑한다.
    // '<rootDir> 토큰을 사용해 루트 경로를 참조한다.
    moduleNameMapper: {
        '^~/(.*)$': '<rootDir>/part9/ch4/movie/src/$1'
    },

    // 일치하는 경로에서는 모듈을 가져오지 않는다.
    // '<rootDir> 토큰을 사용해 루트 경로를 참조한다.
    modulePathIgnorePatterns: [
        '<rootDir>/part9/ch4/movie/node_modules',
        '<rootDir>/part9/ch4/movie/dist'
    ],

    // jsdom 환경에 대한 URL을 설정한다.
    testURL: 'http://localhost',

    // 정규식과 일치하는 파일의 변환 모듈을 저장한다.
    transform: {
        '^.+\\.vue$': 'vue-jest',
        '^.+\\.js$': 'babel-jest'
    }
}