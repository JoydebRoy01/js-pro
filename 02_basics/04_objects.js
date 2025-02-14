//singlelon
// const InstaUser = new Object()

const InstaUser = {} //non singleton objects

InstaUser.id = "123abc"
InstaUser.name = "Joydeb"
InstaUser.isLoggedIn = false


const User = {
    email:"joy@81",
    fullname:{
        userFullName:{
            firstName:"Joydeb",
            lastName:"roy"
        }
    }
}
// console.log(User.fullname.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({}, obj1,obj2)

const obj3 = {...obj1, ...obj2} //splate operator

// console.log(obj3);

// users[1].email
// console.log(InstaUser);

// console.log(Object.keys(InstaUser));
// console.log(Object.values(InstaUser));
// console.log(Object.entries(InstaUser));

// console.log(InstaUser.hasOwnProperty('isLoggedIn'));


const course = {
    Course: "Js",
    fees:"999"
}

const {fees : f} = course //short the name fees to f (destructure)
console.log(f);

// { 
//     name :"joydeb",
//     courseName : "js",
// }




