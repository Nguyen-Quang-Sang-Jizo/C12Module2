class PhuongTien {
    protected mau: string;
    protected readonly soBanh: number;

    constructor(mau: string, soBanh: number) {
        this.soBanh = soBanh;
        this.mau = mau;
    }
    chay(dongCo: string): void {
        console.log(dongCo + ' => Xe chạy!')
    }
    
}

class XeMay extends PhuongTien {
    constructor(mau: string, soBanh: number) {
        super(mau, soBanh);
    }
    xeMayChay(dongCo: string): number {
        super.chay(dongCo)
        return 1;
    }
}
let honda: XeMay = new XeMay('Đỏ', 2);
honda.xeMayChay('Đông cơ hoạt động') // Động cơ hoạt động => xe chạy

