var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "getFirstName", {
        get: function () {
            return this.firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "getLastName", {
        get: function () {
            return this.lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setFirstName", {
        set: function (firstName) {
            this.firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "setLastName", {
        set: function (lastName) {
            this.lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var emp1 = new Employee();
emp1.firstName = "Arunava";
emp1.lastName = "Ghosh";
console.log("The employee name is ".concat(emp1.firstName, " ").concat(emp1.lastName));
