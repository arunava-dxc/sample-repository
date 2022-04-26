// Types of common variables in Typescript
// 1. number - specify the number variables
// 2. string - specify string type of variables
// 3. any - specify any type of variable - i.e generic type

// syntax for declaring a variable
// let <variable-name> : <type> = <value>(optional)

let firstName : string = "Arunava";
let lastName : string = "Ghosh";
let marks : number = 87.33;
let result : any = "Promoted";

console.log(firstName + " " + lastName + " has obtained "+marks+" and he has "+result);