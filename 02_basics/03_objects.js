// singleton

//objects literals
const mySym = Symbol("key1")

const JsUser = {
    name:"joydeb",
    [mySym]:"mykey1",
    age:18,
    location:"salbari",
    email:"joydeb@81Gmail",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser[mySym]);

JsUser.email = "joydeb@12"
// Object.freeze(JsUser)
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello js User");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello js User, ${this.name}`);
}
console.log(JsUser.greeting());

console.log(JsUser.greetingTwo());







