/**
 * Created by xiepan on 2016/10/27.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Greeter = (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "hello," + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
console.log(greeter);
var Animal = (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 55; }
        console.log('Galloping...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake('python');
var tom = new Horse('c++');
sam.move();
tom.move(33);
//private
var A = (function () {
    function A(theName) {
        this.name = theName;
    }
    return A;
}());
//Error:(75, 14) TS2341:
//Property 'name' is private and only accessible within class 'A'.
// new A('Cat').name;
//get&set
//bad
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
var employee = new Employee();
employee.fullNAme = 'Bob Smith';
if (employee.fullNAme) {
    console.log(employee.fullNAme);
}
//good
var passcode = 'secret error passcode';
var Employee2 = (function () {
    function Employee2() {
    }
    Object.defineProperty(Employee2.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == 'secret passcode') {
                this._fullName = newName;
            }
            else {
                console.log('Error: Unauthorized');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee2;
}());
var employee2 = new Employee2();
employee2.fullName = "Bob Smith";
if (employee2.fullName) {
    console.log(employee2.fullName);
}
//static
var Grid = (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
//abstract
var Animal2 = (function () {
    function Animal2() {
    }
    Animal2.prototype.move = function () {
        console.log('roaming the earth...');
    };
    return Animal2;
}());
var Department = (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log('Department name:' + this.name);
    };
    return Department;
}());
var AccountingDepartment = (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        _super.call(this, 'Accounting and Auditing');
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports');
    };
    return AccountingDepartment;
}(Department));
var department;
//Error:(176, 14) TS2511:
//Cannot create an instance of the abstract class 'Department'.
// department = new Department();
department = new AccountingDepartment();
department.printName();
department.printMeeting();
//Error:(183, 12) TS2339:
//Property 'generateReports' does not exist on type 'Department'.
// department.generateReports(); 
//# sourceMappingURL=4.类.js.map