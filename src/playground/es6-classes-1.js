class Person {
    constructor(name = "Anonymous"){
        this.name = name,
        this.age = 0
    }

    getGreeting(){
        return `Hi I am ${this.name} !`
    }

    getDescription(){
        return `${this.name} is ${this.age} years old`
    }
}

const me = new Person("Ricky Martinez", 32)
console.log(me.getGreeting());

const other = new Person()
console.log(other.getGreeting())

