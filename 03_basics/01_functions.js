
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
    return `${username} just logged in `
}
// console.log(loginUserMessage("joyded"));
console.log(loginUserMessage());




