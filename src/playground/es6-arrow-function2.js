console.log("arrow function 2")


const multiplier = {
    numbers: [1, 2, 3, 4, 5],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy)
    }
}

console.log(multiplier.multiply())