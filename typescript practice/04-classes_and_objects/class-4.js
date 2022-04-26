var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Employee.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Employee.prototype.getFirstName = function () {
        return this.firstName;
    };
    Employee.prototype.getLastName = function () {
        return this.lastName;
    };
    return Employee;
}());
var emp1 = new Employee();
emp1.setFirstName("Arunava");
emp1.setLastName("Ghosh");
console.log("The employee name is ".concat(emp1.getFirstName(), " ").concat(emp1.getLastName()));
