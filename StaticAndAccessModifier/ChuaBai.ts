class Employee {
    private _fullName: string;
    private _dateOfBirth: string;
    private _address: string;
    private _jobPosition: string;

    constructor(fullName: string, dateOfBirth: string, address: string, jobPosition: string) {
        this._fullName = fullName;
        this._dateOfBirth = dateOfBirth;
        this._address = address;
        this._jobPosition = jobPosition;
    }

    get fullName(): string {
        return this._fullName;
    }

    set fullName(value: string) {
        this._fullName = value;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }

    get jobPosition(): string {
        return this._jobPosition;
    }

    set jobPosition(value: string) {
        this._jobPosition = value;
    }

    getInfo() {
        return this;
    }
}

class EmployeeManager {
    static employees: Employee[] = [];

    constructor() {
    }

    static add(employee: Employee) {
        this.employees.push(employee)
    }

    static findAll() {
        return this.employees;
    }

    static findByFullName(fullName: string): number {
        let index = -1;
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].fullName == fullName) {
                return i;
            }
        }
        return index;
    }

    static deleteEmployee(fullName: string): void {
        let index = this.findByFullName(fullName);
        if (index !== -1) {
            this.employees.splice(index, 1);
        }
    }

    static editEmployee(fullName: string, employeeNew: Employee): void {
        let index = this.findByFullName(fullName);
        if(index !== -1){
            this.employees[index] = employeeNew;
        }
    }
}

let employee1 = new Employee('Vũ Ning', '17/04', 'Hà Nam', 'Quét rác');
let employee2 = new Employee('Việt', '09/11', 'Hòa Bình', 'Giám đốc');
EmployeeManager.add(employee1);
EmployeeManager.add(employee2);
// EmployeeManager.deleteEmployee('Vũ Ning');
let employee = new Employee('Hùng' , '26/01', 'Nam Định', 'Giám đốc 2');
EmployeeManager.editEmployee('Vũ Ning', employee);
console.log(EmployeeManager.findAll());