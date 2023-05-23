function Person(fname , lname){
    this.fname = fname
    this.lname = lname
}

const person1 = new Person('john', 'wick')
const person2 = new Person('Brandon', 'stark')

Person.prototype.name = function() {
    return this.fname + ' ' + this.lname  // one function that allow any number of objects to invoke it
}
console.log(person1.name())
console.log(person2.name())