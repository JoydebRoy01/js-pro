//premitive Data

//String,Number, Boolearn, Null, undefined, Symbol, BigInt

const score = 30
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail ;

const id = Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

// const bigNumber = 677567334567n

// Reference /Non premitive Data

//Array, Object, Functions

const heros = ["ironman","superman"];
let myObj={
    name : "joydeb",
    age : 23,
}

const myFunction=function (){
    console.log("Hello World");
    
}

console.log(typeof myFunction);


//+++++++++++++++++++++++++++++++++++++++++
//memory(stack[primitive], Heap[non-Primitive])

let myYoutubeName = "joydebYoutube"
let onotherYoutube = myYoutubeName

onotherYoutube = "youtube"

console.log(onotherYoutube);
console.log(myYoutubeName);

let userOne = {
    email : "joydeb@gmail.com",
    uid : "user@ibl",
}

let userTwo = userOne

userTwo.email = "joydeb@81"
console.log(userOne.email);
console.log(userTwo.email);
 