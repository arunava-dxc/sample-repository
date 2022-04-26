var n = 100;
var sum_of_odd = 0;
for (var i = 0; i < n; i++) {
    if (i % 2 != 0)
        sum_of_odd += i;
}
console.log("The sum of odd numbers till ".concat(n, " is = ").concat(sum_of_odd));
