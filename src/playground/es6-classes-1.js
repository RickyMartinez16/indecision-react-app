class Person {
    constructor(name = "Anonymous", age = 0){
        this.name = name,
        this.age = age
    }

    getGreeting(){
        return `Hi I am ${this.name} !`
    }

    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }

    getDescription(){
        let description = super.getDescription()

        if(this.hasMajor()){
            description +=  `Their major is ${this.major}`
        }

        return description
    }
}

const me = new Person("Ricky Martinez", 32)
console.log(me.getGreeting());
console.log(me.getDescription())

const other = new Person()
console.log(other.getGreeting())
console.log(other.getDescription())

