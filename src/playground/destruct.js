// const person = {
//     name: "Ricky",
//     age: 32,
//     location: {
//         city: "ATL",
//         temp: 62
//     }
// }

// const {name = "Anonymous", age} = person

// console.log(`${name} is ${age}`)

// const {city, temp: temperature} = person.location
// console.log(`it's ${temperature} in ${city}`)


// const book = {
//     title: "Ego is the enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// }

// const {name: publisherName = "Self-Published"} = book.publisher

// console.log(`${publisherName}`)



//ARRAY------------------------

// const address = ["900 Battery Ave", "Atlanta", "Georgia", "30339"]

// const [, city, state = "New Jersey",] = address;

// console.log(`You are in ${city}, ${state}`)


const coffee = ["Coffee (hot)", "2.00", "2.50", "3.00"]
const [type, , medium, ] = coffee

console.log(`A medium ${type} costs ${medium}`)