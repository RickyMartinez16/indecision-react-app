class Person {
    constructor(name = "Anonymous"){
        this.name = name
    }

    getGreeting(){
        return `Hi I am ${this.name} !`
    }

}