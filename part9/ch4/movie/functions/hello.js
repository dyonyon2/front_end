exports.handler = async function (event, context){
    return {
        statusCode: 200,
        // 문자열 데이터만 가능! 객체 데이터를 사용할 시에 JSON.stringify로 객체를 문자열화 하여 사용!
        body: JSON.stringify({
            name: "Dyonyon",
            age: 26,
            email: 'jychoi9712@naver.com'
        })
    }
}