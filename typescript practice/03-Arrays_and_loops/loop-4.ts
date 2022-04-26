let n : number = 9;
let count : number = 2;
for(let i = 2; i <= n-1; i++){
    if(n % i == 0)
    {
        console.log("The number is not prime");
        break;
    }
    count += 1;
}

if(count == n)
   console.log("The number is prime");