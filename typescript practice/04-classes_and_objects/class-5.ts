class Employee{
    firstName : string;
    lastName : string;

    get getFirstName(){
        return this.firstName;
    }

    get getLastName(){
        return this.lastName;
    }
    set setFirstName(firstName : string){
        this.firstName = firstName;
    }
    set setLastName(lastName : string){
        this.lastName = lastName;
    }
}

let emp1 = new Employee();

emp1.firstName="Arunava";
emp1.lastName="Ghosh";

console.log(`The employee name is ${emp1.firstName} ${emp1.lastName}`);