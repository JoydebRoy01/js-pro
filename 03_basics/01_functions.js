
function sayMyName(){
    console.log("J");
    console.log("o");
    console.log("y");
    console.log("d");
    console.log("e");
    console.log("b");

}

// sayMyName() //()execution/reference

// function addTwoNumbers (Number1, Number2)//numa and num2 parameter
// {
//     console.log(Number1 + Number2);
// }

function addTwoNumbers (Number1, Number2)//numa and num2 parameter
{
    // let result = Number1 + Number2
    // return result
    return Number1+Number2
}
const result = addTwoNumbers( 3, 4) //3 ,4 argument

// console.log("Result", result);

function loginUserMessage(username){
    // if (username === undefined)
    if (!undefined){
        console.log("Please Enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("joyded"));
// console.log(loginUserMessage());


function calculateCartPrice(...num1) //...(rest operator)
{
    return num1
}

// console.log(calculateCartPrice(200, 400, 500));

const user = {
    username: "joydeb",
    price: 199
}

function handeleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handeleObject(user)

handeleObject({
    username:"Ram",
    price:399
})

const myNewArray = [200,300,400,500]
function returnSecondValue (getArray){
    return getArray[1]

}
 console.log(returnSecondValue(myNewArray));
 
 




