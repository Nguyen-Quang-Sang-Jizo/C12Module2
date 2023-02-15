class Person {
    public name: string;
    public age: number;

    constructor(name, age) {
        this.age = age;
        this.name = name
    }

    getName(): string {
        return this.name
    }

    setName(nameInput: string): void {
        this.name = nameInput;
    }
}

let person: Person = new Person('Linh', 12);
// person.setName('Ning');
// console.log(person.getName())
person.name = 'Ning'
console.log(person.name)



function func(a , b) {
    a = 1;
    b = 2;
}

// let num1 = 0;
// let num2 = 0;
// func(num1, num2);
// console.log(num1 , num2);
//
// let obj1 = {
//     name: 'Ning'
// }
// let obj2 = {
//     name: 'Ning'
// }
// console.log(obj1 === obj2


