const user = {
    userName : "joydeb",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
        
    }
}

// user.welcomeMessage()
// user.userName = "roy"
// user.welcomeMessage()

// console.log(this);

// function coffie(){
//     console.log(this);
    
// }
// coffie()

// const coffie = () => {
//     let userName = "joydeb"
//     console.log(this);
    
// }
// coffie()

// const addTwo = (num1, num2) =>{
//     return num1+num2
// }

// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({userName:"joydeb"})
console.log(addTwo(3,5));
