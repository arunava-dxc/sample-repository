var n = 9;
var count = 2;
for (var i = 2; i <= n - 1; i++) {
    if (n % i == 0) {
        console.log("The number is not prime");
        break;
    }
    count += 1;
}
if (count == n)
    console.log("The number is prime");
