let arr : number[] = [1,2,3,4,5,6];
let sum : number = 0;
for(let ele of arr){
    if(ele == 5){
        console.log("special case");
        continue;
    }
    console.log(ele);
}