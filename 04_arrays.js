const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ["Hank", "Ironman", "Spiderman"]

// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0])

//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.indexOf(9));
// const newArr = myArr.join()
// console.log(newArr)
// console.log(myArr);

//slice and splice

console.log("A ", myArr);

const mna1 = myArr.slice(1, 3);

console.log(mna1);
console.log("B ", myArr);

const mna2 = myArr.splice(1, 3);
console.log(mna2);
console.log("C ", myArr);
