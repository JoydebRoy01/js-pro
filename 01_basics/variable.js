const accountId = 2212
let accountEmail = "joydeb81@gmail.com"
var accountPassword = "12345"
accountCity = "Ranirhat"
let accountState ;

// accountId = 2 const not changable

accountEmail = "joy@gmail.com"

accountPassword = "73673"
accountCity = "Dhupguri"

/* prefer not to use var 
because of issue in block scope and functions*/

console.log(accountId);
console.table([accountEmail,accountPassword,accountCity,accountState])
