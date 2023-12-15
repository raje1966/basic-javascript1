// const tinderUser = new Object();

//the above is one method to declare an object. below is another one.

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {

    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Rajendra",
            lastname: "Kulkarni"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

//How to merge objects?

// const obj1 = { 1: "a", 2: "b" }
// const obj2 = { 3: "c", 4: "d" }
// // const obj3 = { obj1, obj2 }
// // const obj3 = Object.assign( obj1, obj2)
// //Below is a spread function(...) is commonly used in merging objects.

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser.keys.length);
// console.log(Object.keys(tinderUser));
console.log(Object.entries(tinderUser));