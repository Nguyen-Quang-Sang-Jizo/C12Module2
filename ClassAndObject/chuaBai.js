// function replace(array, from, to, elements) {
//
//     // array.splice.apply(array, [from, to - from].concat(elements))
//
//     let arr1 = [];
//     for (let i = 0; i < from; i++) {
//         arr1.push(array[i]);
//     }
//
//     let arr2 = [];
//     for (let i = to; i < array.length; i++) {
//         arr2.push(array[i])
//     }
//
//     let arr3 = [...arr1, ...elements, ...arr2];
//     array.splice(0, array.length)
//     for (let i = 0; i < arr3.length; i++) {
//         array.push(arr3[i]);
//     }
// }
//
//
// let testArray = [1, 2, 100, 100, 6]
//
//
// replace(testArray, 2, 4, [3, 4, 5])
//
//
// console.log(testArray)
//
//
// // function copyReplace(array, from, to, elements) {
// //
// //     // return array.slice(0, from)(elements).concat(array.slice(to))
// //
// //     let arr1 = [];
// //     for (let i = 0; i < from; i++) {
// //         arr1.push(array[i]);
// //     }
// //
// //     let arr2 = [];
// //     for (let i = to; i < array.length; i++) {
// //         arr2.push(array[i])
// //     }
// //
// //     return [...arr1, ...elements , ...arr2];
// // }
// //
// //
// // console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))
// //
// //
// let customerOrder = []
//
//
// function recordOrders(time, ...products) {
//     // customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})
//     customerOrder.push({time: time, birds: products})
// }
//
//
//
// recordOrders(new Date, "coffee", "yaourt", "pizza")
//
//
// console.log(customerOrder)
//
let str =
    `4 2
0 0 0 0`

function test(str) {
    let arr = str.split('\n');
    let arr1 = arr[0].split(' ');
    let arr2 = arr[1].split(' ');
    let count = 0;
    let temp = 1;
    for (let i = 0; i < +arr1[0]; i++) {
        if (+arr2[i] !== 0) {
            count++;
            if (count === +arr1[1]) {
                temp = +arr2[i] ;
                break;
            }
        }
    }
    for (let i = +arr1[1]; i < +arr1[0]; i++) {
        if(temp === +arr2[i]){
            count++
        }
    }
    return count;
}

console.log(test(str))
function fib(n, num, num2) {
    if (n <= 1) return 1;
    if(!num) num = 1;
    if(!num2) num2 = 1;
    console.log(num);
    let temp = num;
    num = num + num2;
    num2 = temp;
    n--;
    if(n === 0) return ;
    fib(n , num , num2)
}
