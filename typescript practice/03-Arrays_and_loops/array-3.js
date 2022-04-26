var arr = [1, 2, 3, 4, 5, 6];
var sum = 0;
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var ele = arr_1[_i];
    if (ele == 5) {
        console.log("special case");
        continue;
    }
    console.log(ele);
}
