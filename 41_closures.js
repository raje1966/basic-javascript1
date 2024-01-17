function makeAdder(x) {
    function add(y) {
        return y + x;
    }
    return add;
}

let plusOne = makeAdder(1);

console.log(plusOne(12));
console.log(plusOne(3));

let plusTen = makeAdder(10);

console.log(plusTen(10));
console.log(plusTen(12));
