// AはBに依存している
// const funcB = () => {
// return "こんにちは！";
// };

// const funcA = () => {
// const greetMessage = funcB();

// console.log(greetMessage);
// };

// funcA();

// BがAに依存するには？
type Message = ()=> string

const funcA = (message:Message)=>{
    console.log(message())
}

const genMessage = ()=> "わんわん"

funcA(genMessage)
funcA(genMessage)


// Aに毎回引数を渡さなくていいように、Aを生成する関数を定義しておくこともできる
const genA = (message:Message)=> ()=> {
    console.log(message())
}

const a = genA(genMessage)

a()
a()