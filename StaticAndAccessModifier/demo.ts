class Chrome {
    private _noiDung: string;
    public quocGia: string = 'Viet Nam';
    static luotTruyCap = 0;

    constructor(noiDungNhapVao: string) {
        this._noiDung = noiDungNhapVao;
    }

    get noiDung(): string {
        return this._noiDung;
    }

    set noiDung(value: string) {
        this._noiDung = value;
    }

    static truyCap() {
        this.luotTruyCap++;
    }

    fun() {
        Chrome.luotTruyCap++;
    }

}

// let c = 0;
// let d = 0;
// function a(num1 , num2) {
//     // let num1 = c;
//     // let num2 = d;
//     num1 = 1
//     num2 = 2;
// }
// a(c , d)

let l = {
    name : 'Linh'
}


