interface IPerson2 {
    name:string
    age?:number
}

interface IKorean extends IPerson2 {
    city:string
}

const d:IKorean = {
    name:"dyonyon",
    city:"동탄"
}

