// const name = "Rajendra"
// const repoCount = 60

// console.log(name + repoCount);
// //The above method of concatinating string is an old method and should not be used.


// //Use the back tick method to concatinate in Javascript.

// console.log(`My name is ${name} and my repo count is ${repoCount}.`)

// //Also there is another below mentioned method to declare string.

 const gameName = new String("   RajendraST   ")
// console.log(gameName);
// console.log(typeof gameName);
// // //Declaring string by this  method, converts String into an object and this gives additional properties and methods to it.
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// // console.log(gameName.charAt(3));
// console.log(gameName.indexOf('j'));

// console.log(gameName.substring(2, 6));
// // console.log(gameName.slice(2, 7));
// console.log(gameName);

// console.log(gameName.trim());

const url = "https://rajendra.kulkarni1@gmail.com/rajendra%20kulkarni"

// console.log(url.replace('%20', '-'));
console.log(url.includes('rajendra'));

const newString = "Raj-Bhavana-Shivangi"
console.log(newString.split('-'));