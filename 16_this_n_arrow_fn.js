// const user = {

//     username: "Dharmendra",
//     price: 999,

//     welcomeMessage: function () {
//         console.log(`${this.username}, welcome to website!!!`)
//         console.log(this);
//     }
// }

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);

// const raj = function () {
//     let username = "rajendra"
//     console.log(this.username);

// }

// "This" cannot be used in arrow function.

// const raj = () => {
//     let username = "Rajendra"
//     console.log(this.username)
// }

// raj()

// Basic syntax of arrow function where it is held in a variable:

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(3, 2));

// one more way the arrow function is written and that is implicit return.  This function is without curly braces and return keyword like mentioned below.

const addTwo = (num1, num2) => num1 + num2

console.log(addTwo(2, 4));