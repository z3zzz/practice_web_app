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

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    getName() {console.log(this.name)}
    getAge()  {console.log(this.age)}
}

person1 = new Person("Bob", 16)

console.info(person1.prototype)
