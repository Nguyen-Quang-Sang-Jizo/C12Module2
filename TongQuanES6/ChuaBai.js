function replace(array, from, to, elements) {
    // array.splice.apply(array, [from, to - from].concat(elements))
    let arr1 = []
    for (let i = 0; i < from; i++) {
        arr1.push(array[i]);
    }
    let arr2 = [];
    for (let i = to; i < array.length; i++) {
        arr2.push(array[i]);
    }
    let arrayCopy = [...arr1, ...elements, ...arr2];
    array.splice(0 , array.length)
    arrayCopy.map(item => {
        array.push(item)
    })
}


let testArray = [1, 2, 100, 100, 6]

replace(testArray, 2, 4, [3, 4, 5])

console.log(testArray)


function copyReplace(array, from, to, elements) {
    // return array.slice(0, from).concat(elements).concat(array.slice(to))
    let arr1 = []
    for (let i = 0; i < from; i++) {
        arr1.push(array[i]);
    }
    let arr2 = [];
    for (let i = to; i < array.length; i++) {
        arr2.push(array[i]);
    }
    return [...arr1, ...elements, ...arr2]
}


console.log(copyReplace([1, 2, 100, 200, 6], 2, 4, [3, 4, 5]))

let customerOrder = []


function recordOrders(time, ...products) {
    // customerOrder.push({time, birds: Array.prototype.slice.call(arguments, 1)})
    customerOrder.push({time, products})
}

recordOrders(new Date, "coffee", "yaourt", "pizza")


console.log(customerOrder)