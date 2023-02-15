interface VatTheBay {
    soCanh: number;
    bay(): void;
}

class Chim implements VatTheBay{
    soCanh: number;
    constructor(soCanh: number) {
        this.soCanh = soCanh
    }
    bay(): void {
        console.log('Chim đang bay')
    }
}
let chim: VatTheBay = new Chim(2);


class Bird {
    private _name: string
    constructor(name: string) {
        this._name = name
    }
    get name(): string {
        return this._name;
    }
}

class Person <T , A> {
    private name: string;
    constructor(name: string) {
        this.name = name;
    }
    go(t: T): string{
        return t['name'] + ' là của ' + this.name;
    }
}
let bird: Bird = new Bird('cú mèo');
let person: Person<Bird, string> = new Person('Ning');
console.log(person.go(bird)) //Cú mèo là của Ning