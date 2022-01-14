
var fluffy = {
    name: "Fluffy",
    birthday: "1/12/2019",
    age: function myFunc() {
        console.log(this)
        return this.birthday;
    },
    attendance: 0
}

//console.log(fluffy.age())
//

class Creature {
    _created = "2021.12.22"
    #createdReal = "2021.12.44"
    
    constructor() {
        this.is_alive = true
        this.is_creature = true
    }
}


class Person extends Creature{
    _attendance = 0
    constructor(name, age) {
        super()
        this.name = name
        this.age = age
    }

    getName() {console.log(this.name)}
    getAge()  {console.log(this.age)}
}


person1 = new Person("Bob", 16)
person1._attendance = 1
creature1 = new Creature()

console.log(1, creature1)
console.log(1.5, Creature.prototype)

console.log(2, person1)
console.log(2.1, person1.constructor)
console.log(2.5, Person.prototype)
console.log(2.6, Person.prototype.prototype)
console.log(3, person1.Prototype)
console.log(4, Object.getPrototypeOf(person1))
console.log(5, Object.getPrototypeOf(creature1))
console.log(5.5, Object.getPrototypeOf(Person.prototype))


array1 = new Array()
console.log(6, array1)
console.log(6.5, Object.getPrototypeOf(array1))
console.log(7, Array.prototype)
console.log(8, array1.prototype)
console.log(9, person1.valueOf())

