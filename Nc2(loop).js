// //lets understand the looping statements


// while loop 
// let num = 5460;
// let sum =0;
// let lastdigit = 0;
// while (num>0) {
//     num = parseInt(num / 10);
//     lastdigit = parseInt(num % 10);
//     console.log(num);
//     sum++;
// }
// console.log("total digits in number:"+sum)


//for loop

//in selection sort
let arr=[4,3,10,12,2,8];
size = arr.length;
//console.log(size, arr);
for(i=0; i<size; i++){
    min = i;
    for(j=i+1; j<size; j++){
        if(arr[j]<arr[min]){
            min=j;
        }
    }
    let temp = arr[i];
    arr[i]=arr[min];
    arr[min]=temp;
}
console.log(arr);

let num = 5;
do {
    console.log("hi");
   }
 while (num<5);