class Employee{
    private firstName : string;
    private lastName : string;

    public setFirstName(firstName : string) : void{
        this.firstName = firstName;
    }

    public setLastName(lastName : string) :void {
        this.lastName = lastName;
    }

    public getFirstName() : string{
        return this.firstName;
    }

    public getLastName() :string{
        return this.lastName;
    }
}

let emp1 = new Employee();
emp1.setFirstName("Arunava");
emp1.setLastName("Ghosh");
console.log(`The employee name is ${emp1.getFirstName()} ${emp1.getLastName()}`);