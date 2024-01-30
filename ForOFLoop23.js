//now lets see the for of loop in in js use in ARRAY



// let arr1 = [];
// arr1[0] = 10;
// arr1[4] =40;  
let arr1 = [10,20,30,40,50]
for(let n of arr1){   // here n is the variable which holdes a single at a time of an elemetn of array
  console.log(n)
}
console.log(`Length of an array := ${arr1.length}`);


//now here we can also used the 'for in loop' in array for key and value 

for(let key in arr1){
  console.log(key)   // here it will print the key which is the index number of an elements
  //AND
  console.log(arr1[key]);  // this is for fetching the values of the keys 
  
}
