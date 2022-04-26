let n: number = 100;
let sum_of_odd : number = 0;
for(let i = 0; i < n; i++){
    if(i % 2 != 0)
        sum_of_odd += i;
}
console.log(`The sum of odd numbers till ${n} is = ${sum_of_odd}`);