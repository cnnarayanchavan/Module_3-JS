//now lets see the for of loop in in js use in ARRAY



let arr1 = [];
arr1[0] = 10;
arr1[4] =40;
for(let n of arr1){   // here n is the variable which holdes a single at a time of an elemetn of array
  console.log(n)
}
console.log(`Length of an array := ${arr1.length}`);


//now here we can also used the 'for in loop' in array for key and value 

for(let key in arr1){
  consloe.log(key)
}
