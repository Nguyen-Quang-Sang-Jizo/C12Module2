// let a = {
//     name: 'Ning'
// }; // Giá trị a là #001
//
// a = {
//     name: 'Ning2',
//     age: 12
// }
// thay đổi a = object mới => thay đổi địa chỉ là #002
// => gán lại nên giá trị a là #002


class A {
    #name = 1;
    constructor(name) {
        this.#name = name
    }
}



