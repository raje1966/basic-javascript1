let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

// let myNewDate = new Date(2023, 2, 13, 10, 10)
// console.log(myNewDate.toLocaleString());
// let myNewDate = new Date("01-04-2023")
// console.log(myNewDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myNewDate.getTime());
console.log(myDate.getDate());
console.log(myDate.getMonth() + 1);
console.log(myDate.getDay());
console.log(myDate.toLocaleString('default', {weekday: "short"}));