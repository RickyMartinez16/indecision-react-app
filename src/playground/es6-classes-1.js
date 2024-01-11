class Person {
    constructor(name = "Anonymous"){
        this.name = name,
        this.age = 0
    }

    getGreeting(){
        return `Hi I am ${this.name} !`
    }
}

const me = new Person("Ricky Martinez")
console.log(me.getGreeting());

const other = new Person()
console.log(other.getGreeting())

