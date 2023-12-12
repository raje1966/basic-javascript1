
// function sayMyName() {
//     console.log("R");
//     console.log("a");
//     console.log("j");
//     console.log("e");
//     console.log("n");
//     console.log("d");
//     console.log("r");
//     console.log("a");

// }

// sayMyName()

// function addTwoNumbers(number1, number2) {
//    console.log( number1 + number2);

// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    
    // return result
    return number1 + number2
    
 
 }
 
const result = addTwoNumbers(3, 4)

// console.log("Result: ", result);

function loginUserMessage(username = "Sam") {
    if (!username) {
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Rajendra"))
console.log(loginUserMessage())