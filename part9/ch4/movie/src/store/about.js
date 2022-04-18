export default {
    // module이 될 수 있도록 
    namespaced: true,

    // 사용할 데이터를 함수로 만든다
    // 데이터를 그때그때 참조하여 가져옴으로써 데이터의 불변성 보장
    state:() => {
        return {
            name: 'Jong-Young Choi',
            email: 'jychoi9712@gmail.com',
            blog: 'https://soapy-alley-77a.notion.site/f8fb4014e8754b0ebae45e46f745d23b?v=13fc858cb7914c6fb0c2d470bdd0aa6d',
            git: 'https://github.com/jychoi9712',
            phone: '+82-10-6342-8173',
            image: 'https://avatars.githubusercontent.com/u/39684556?s=400&u=7b7aca1f65f8d9be18ea20c2db3d4b87cb2fab13&v=4'
        }
    }
}