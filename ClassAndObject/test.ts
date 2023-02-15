//Khai báo một lớp có tên Product
class Product {
    _name: string;
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

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}

//Khai báo 1 đối tượng
let p = new Product('linh', 23);


