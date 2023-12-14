// In regards to declaring objects, there are two methods.  One is like constructor and another is like literal.

// Only object made like with constructor is called singleton.  The literal objects are not singletons.

// Object.create is the way to make objects through constructor method.

const jsUser = {
    name: "Raj",
    age: 58,
    email: "rajendra@gmail.com",
    location: "Pune",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]
        
}
 
// console.log(jsUser.email);
// console.log(jsUser["email"]);

//you can actually use the freeze function to lock the object preventing changes in its elements.

// object.freeze(jsUser);

// functions in javascripts are treated like variables or objects like:

jsUser.greeting = function () {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
// console.log(jsUser.greeting());