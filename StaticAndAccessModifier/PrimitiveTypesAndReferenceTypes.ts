// let a: number = 1;
// let b: number = a;
// a = 2;
// console.log(b) //Output : 1

//Tham chiếu
// let a = {
//     name: 'Ning'
// };
// let b = a;
// let c = {
//     name: 'CocCon'
// }
// // Tham trị
// let num1 = 10;
// let num2 = num1;
// let num3 = 12
// class XeMay {
//     mau: string;
//     soBanh: number;
//      static tenHang: string = 'HonDa';
//     static dem: number = 0
//     constructor(mauNhapVao: string, soBanhNhapVao: number) {
//         XeMay.dem++
//         this.mau = mauNhapVao;
//         this.soBanh = soBanhNhapVao;
//     }
//     static chay() {
//         console.log(this.tenHang + ' Xe đang chạy !')
//     }
//     dongCoChay() {
//         // console.log(this.tenHang + ' động cơ chạy!'); // Error : dongCoChay không sử dụng static
//         console.log(XeMay.tenHang + ' động cơ chạy!');
//     }
// }
// let xeMay = new XeMay('đỏ', 2);
// // xeMay.tenHang; // Error
// console.log(XeMay.tenHang) // Honda
// console.log(XeMay.dem)


// class XeMay {
//     private mau: string;
//     private soBanh: number;
//     constructor(mauNhapVao: string, soBanhNhapVao: number) {
//         this.mau = mauNhapVao;
//         this.soBanh = soBanhNhapVao;
//     }
//     private chay() {
//         console.log('Xe đang chạy')
//     }
//     // truy cập thuộc tính private thông qua phương thức public
//     getMau() : string{
//         return this.mau;
//     }
//     //truy cập phương thức private thông qua phương thức public
//     public chayBonBon() {
//         this.chay()
//     }
// }
// let xeMay = new XeMay('đỏ', 2);
// console.log(xeMay.mau) // Error
// console.log(xeMay.getMau()) // Đỏ
// xeMay.chay() // Error;
// xeMay.chayBonBon() // Xe đang chạy

// class PhuongTien {
//     protected mau: string;
//     protected soBanh: number;
//     constructor(mau: string, soBanh: number) {
//         this.mau = mau;
//         this.soBanh = soBanh
//     }
//     protected chay() {
//         console.log('Chạy nè')
//     }
// }
// class XeMay extends PhuongTien {
//     constructor(mau: string, soBanh: number) {
//         super(mau, soBanh);
//     }
//     xeMayChay() {
//         this.chay();
//     }
//     getMau() {return this.mau;}
// }
//
// let xeMay = new XeMay('đỏ', 2);
// // xeMay.mau; //Error
// console.log(xeMay.getMau())
// // xeMay.chay(); // Error;
// xeMay.xeMayChay();


class Person {
    private name: string;
    protected name2: string
    constructor(name: string) {
        this.name = name;
        console.log(222222)
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

class Student extends Person {
    studentId: number;

    constructor(name: string, studentId: number) {
        super(name);
        this.studentId = studentId;
        console.log(11)
    }

    // sayHello() {
    //     console.log(`Hello, my name is ${this.getName()} and my student ID is ${this.studentId}.`);
    // }

 /*   private getName() {
        return this.name;
    }*/
}

const student = new Student('John Doe', 1234);
student.sayHello(); // output: "Hello, my name is John Doe and my student ID is 1234."

interface A {
    fly();
}
interface B {
    fly();
}

class C implements A, B {
    fly() {
    }
}
