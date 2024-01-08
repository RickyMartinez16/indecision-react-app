console.log("es6 arrow function js")

const person = "Ricky Martinez"

const getFirstName = (name) => {
    return name.split(" ")[0]
}

const getFirstNameArrow = (name) => name.split(" ")[0]

console.log(getFirstName(person))

console.log(getFirstNameArrow(person))