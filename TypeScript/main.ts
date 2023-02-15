let a: number = 1;
let b: string = 'Linh';
let c: boolean = true;
let d: null = null;
let e: undefined = undefined;
class Product {
    private _name: string;
    private _price: number;

    //Hàm khởi tạo
    constructor(name: string, price: number) {
        this._name = name;
        this._price = price;
    }

    //Hàm get sử dụng để lấy ra giá trị
    get name(): string {
        return this._name;
    }

    //Hàm set sử dụng cài đặt lại giá trị
    set name(value: string) {
        this._name = value;
    }
}
function test(a: number , c?: string): number {
    return 1;
}


console.log(test(1))
test(1,'a')
let arr: number[] = [1,23,2];
let products: Product[] = [];


enum Month {
    Jun,
    Feb,
    Mar
}
enum Month2 {
    Jun = 'Tháng 1',
    Feb = 'Tháng 2',
    Mar = 'Tháng 3'
}
type married = "yes" | "no";
// let isMarried: married = "KKK" ; //Error
let isMarried2: married = "yes" ; //Success

type random = number | string;
let r: random  = 1; // Success
// let r2: random = true //Error

let cat: number | string = 'Tom'
console.log(a)



