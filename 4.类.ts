/**
 * Created by xiepan on 2016/10/27.
 */

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "hello," + this.greeting;
    }
}

let greeter = new Greeter('world');
console.log(greeter);


class Animal {
    name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}


class Horse extends Animal {
    constructor(name: string) {
        super(name);
    }

    move(distanceInMeters = 55) {
        console.log('Galloping...');
        super.move(distanceInMeters);
    }

}

let sam = new Snake('python');
let tom: Animal = new Horse('c++');

sam.move();
tom.move(33);


//private

class A {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }

}
//Error:(75, 14) TS2341:
//Property 'name' is private and only accessible within class 'A'.
// new A('Cat').name;


//get&set

//bad
class Employee {
    fullNAme: string;
}

let employee = new Employee();
employee.fullNAme = 'Bob Smith';
if (employee.fullNAme) {
    console.log(employee.fullNAme);
}

//good
let passcode = 'secret error passcode';
class Employee2 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == 'secret passcode') {
            this._fullName = newName;
        } else {
            console.log('Error: Unauthorized');
        }
    }
}

let employee2 = new Employee2();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
    console.log(employee2.fullName)
}

//static

class Grid {
    static origin = {x: 0, y: 0};

    calculateDistanceFromOrigin(point: {x: number;y: number}) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }

    constructor(public scale: number) {
    }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);

console.log(grid1.calculateDistanceFromOrigin({x: 10, y: 10}));
console.log(grid2.calculateDistanceFromOrigin({x: 10, y: 10}));

//abstract

abstract class Animal2 {
    abstract makeSound(): void;

    move(): void {
        console.log('roaming the earth...');
    }

}

abstract class Department {
    constructor(public name: string) {

    }

    printName(): void {
        console.log('Department name:' + this.name);
    }

    abstract printMeeting(): void;
}


class AccountingDepartment extends Department {
    constructor() {
        super('Accounting and Auditing');
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am');
    }

    generateReports(): void {
        console.log('Generating accounting reports');
    }
}

let department: Department;
//Error:(176, 14) TS2511:
//Cannot create an instance of the abstract class 'Department'.
// department = new Department();

department = new AccountingDepartment();
department.printName();
department.printMeeting();
//Error:(183, 12) TS2339:
//Property 'generateReports' does not exist on type 'Department'.
// department.generateReports();