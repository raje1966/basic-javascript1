//The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

/*A promise is in one of these states:
1. pending: initial state, neither fulfilled nor rejected.
2. fulfilled:  Meaning the operation has completed successfully.
3. rejected:  meaning that the operation failed.

The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason(error).*/

// const promiseOne = new Promise(function (resolve, reject) {
//     //     //do an async task
//     //     setTimeout(function () {
//     //         console.log('Async task is complete');
//     //         resolve();
//     //     }, 5000)
//     // })

//     // promiseOne.then(function () {
//     //     console.log("Promise consumed");
    
//     // })
// // })   

// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
    
// }).then(function () {
//     console.log("Async 2 resolved");
// })

// new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2");
//         resolve()
//     }, 1000)
// }).then(function() {
//     console.log("Async 2 resolved");
// })

// const promiseOne = new Promise((function (resolve, reject) {
//     setTimeout(function () {
//         console.log("Async task begins");
//         resolve()
//     }, 1000)
// }));

// new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         console.log("Async task 2 begins");
//         resolve()
//     }, 5000)
// }).then(function() {
//     console.log("Async task 2 completed");
// })

// promiseOne.then(function () {
//     console.log("Async task completed");
// })

// const promiseThree = new Promise(function (resolve, reject) {
//     setTimeout(function() {
//         resolve({username: "Chai", email: "rajendra@example.com"})
//     }, 1000 )
// })

// promiseThree.then(function(user) {
//     console.log(user);
// })

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function() {
        let error = false;
        if (!error) {
            resolve({username: "Rajendra", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function (error) {
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")
)

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "Javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//          console.log("E ", error);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data)
})
.catch((error) => console.log(error))