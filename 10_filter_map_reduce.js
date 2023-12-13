// // const coding = ["js", "Ruby", "java", "python", "cpp"]

// // const values = coding.forEach((item) => {
// //     console.log(item);
// //     return item
// // })

// // console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // // const newNums = myNums.filter((num) => num > 4)
// // // const newNums = myNums.filter((num) => {
// // //    return num > 4
// // // })

// // const newNums = []


// // myNums.forEach((num) => {
// //     if (num > 4) {
// //         newNums.push(num)
// //     }
// // })
// // console.log(newNums);

// // const newNums = myNums.map((num) => num + 10)
// const newNums = []

// // myNums.forEach((num) => num + 10)

// console.log(newNums);

// const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers
//                 .map( (num) => num * 10 )
//                 .map(( num) => num + 1 )
//     .filter((num) => num >= 40)
                
// console.log(newNums);

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curval) {
//     console.log(`acc: ${acc} and curval: ${curval}`);
//     return acc + curval
// }, 0)

// console.log(myTotal);

// const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)
                
// console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 3999
    },
    {
        itemName: "java course",
        price: 5999
    },
    {
        itemName: "ds course",
        price: 12900
    }
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);