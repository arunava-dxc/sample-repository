class Employee{
    firstName : string;
    lastName : string;

    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// creating object
let emp1 = new Employee("Arunava","Ghosh");

console.log(`The employee name is ${emp1.firstName} ${emp1.lastName}`);