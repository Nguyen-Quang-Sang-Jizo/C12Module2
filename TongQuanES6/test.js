// let obj = {
//     name: 'Linh',
//     age: 1,
//     child: {
//         username: 'Nig'
//     }
// }
// let {name: nameFather, child: {username}} = obj;
// let {name, ...info} = obj
// console.log(info)

//
// let {name1, age} = obj;
// console.log(name1)
// console.log(age)
//
// let arr = [1, 2, 3, 4];
// let [number1, num2 , num3, num4] = arr;
// console.log(number1)

// const numbers = [1,2,3,4,5,6,7,8];
// let odds = numbers.filter(num => num % 2);
// console.log(odds);//[1,3,5,7]


// let c = (a) => a
//
// let obj3 = {
//     username: 'Ning',
//     getUsername: () => {
//         return this.username;
//     } // context
// }
// console.log(obj3.getUsername());
//
// let tinhTong = (a, b, c) => ({name: '2', age: 1})
// let a = {...obj}
//
// function c(a) {
//     console.log(a)
// }
// let arr = [1,2,3]
// c([...arr])

// let {name, ...rest} = obj;
// console.log(rest)
//

let name = 'Ning';
let age = 13
let info = 'Tôi là ' + name + ' Tôi ' + age + ' tuổi';
let test = () => ({name: 'Linh', age: 1})


const customer = {
    name: "Linh",
    getName:  () => {
       return this.name
    }
}
console.log('11' + customer.getName())

console.log(test())

let arr = [1, 3, 4, 5];
let [num1, num2, ...restParam] = arr;
console.log(num1, num2, restParam);

let person = {
    username: 'Lih',
    age: 1,
    isHandsome: true,
    child: {
        username: 'Ning'
    }
}

let {username: nameFather, child: {username: nameChild}} = person;
console.log(nameFather)

function test2(a, b, ...restParam) {
    console.log(a, b, restParam)
}

test2(1, 2, 4, 5, 5);

//Spread Operation
let person2 = {...person};
person2.username = 'Ning2';
console.log(person, person2);
let arr2 = [1, 4, 5, 3, 3];
let arr3 = [1, ...arr2];
console.log(arr3)





