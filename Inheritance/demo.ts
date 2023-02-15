class Car {
    private soBanh: number;

    constructor(soBanh: number) {
        console.log(2)
        this.soBanh = soBanh;
    }

    chay(kieuChay: string): string {
        console.log('Xe đang chạy')
        return 'a';
    }
    getSoBanh() {
        return this.soBanh
    }
}

class SportCar extends Car{
    public mau: string;

    constructor(soBanh: number, mau: string) {
        super(soBanh);
        this.mau = mau;
    }
    chay(kieu: string): string {
        console.log('Sport Car đang chạy!' + kieu)
        return '1';
    }
}
let sportCar: Car = new SportCar(4, 'Đỏ');

