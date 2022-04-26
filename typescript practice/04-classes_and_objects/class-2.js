var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Employee;
}());
// creating object
var emp1 = new Employee("Arunava", "Ghosh");
console.log("The employee name is ".concat(emp1.firstName, " ").concat(emp1.lastName));
