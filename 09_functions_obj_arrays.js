function calculateCartPrice(...num1) {
    return num1


}

console.log(calculateCartPrice(200, 400, 600))
const user = {

    username: "Raj",
    price: 200
}

function handleObject(anyObject) {

    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
handleObject({
    username: "khaj",
    price: 300
})

const myNewArray = [200, 400, 600, 100]

function returnSecondValue(getArray) {

    return getArray[0]
}

console.log(returnSecondValue([200, 400, 600, 100]))