var n = 5; // row or column count
// defining an empty string
var string = "";
for (var i = 0; i < n; i++) { // external loop
    for (var j = 0; j < n; j++) { // internal loop
        string += "*";
    }
    // newline after each row
    string += "\n";
}
// printing the string
console.log(string);
