class ClassName {

    private static instance: ClassName | null  = null
    public static getInstance(){
        // ClassName으로부터 만든 object가 있으면 그것을 리턴
        // 없으면, 만들어서 리턴
        if(ClassName.instance === null){
            ClassName.instance = new ClassName()
        }
        return ClassName.instance
    }

    private constructor() {
        
    }
}

// const a = new ClassName()
// const b = new ClassName()

const a = ClassName.getInstance()
const b = ClassName.getInstance()

console.log(a === b)


