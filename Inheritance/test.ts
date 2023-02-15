// class PhuongTien {
//     protected mau: string;
//     protected soBanh: number;
//     constructor(mau: string, soBanh: number) {
//         this.soBanh = soBanh;
//         this.mau = mau;
//     }
//
//     chay(dongCo: string): void {
//         console.log('Xe đang chạy!')
//     }
// }
//
// class XeMay extends PhuongTien {
//     private denXe: string;
//
//     constructor(mau: string, soBanh: number) {
//         super(mau, soBanh);
//
//     }
//
//     batDen() {
//         console.log(this.denXe + ' đang bật')
//     }
//
//     getDen() {
//         return this.denXe;
//     }
//
//     chay(dongCo: string): number {
//         console.log('Xe máy đang chạy !')
//         return 1;
//     }
// }
//
// let honDa: XeMay = new XeMay('Đỏ', 2);
// console.log(honDa.chay('Linh'));
// //Result : Xe máy đang chạy
// //1
