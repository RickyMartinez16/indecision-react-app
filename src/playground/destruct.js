const person = {
    name: "Ricky",
    age: 33,
    location: {
        city: "ATL",
        temp: 62
    }
}

const {name, age} = person

console.log(`${name} is ${age}`)

const {city, temp} = person.location
console.log(`it's ${temp} in ${city}`)