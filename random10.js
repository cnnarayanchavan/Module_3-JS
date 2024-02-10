//let's revise some jS concepts
let arr =[5,5,5,5,5,10]
console.log(arr);

//-----------------------------------------------------------------------------------------------//
// //print max number
//let arr =[5,5,5,5,5,10]
// let max = 0;
// for(i = 0; i <arr.length; i++){
//     if(max = arr[i]){
//         max = arr[i]
//     }
// }
// console.log(`max element in array is: ${max}`);



//-----------------------------------------------------------------------------------------------//
//print the total some of elements in array
//let arr =[5,5,5,5,5,10]
// let sum = 0;
// for(i=0; i<arr.length; i++){
//   sum = sum +arr[i]
// }
// console.log( "Total sum is: " +sum)


//-----------------------------------------------------------------------------------------------//
//print the even number in arrays and total sum of even number
//let arr =[5,5,5,5,5,10]
// let sum = 0;
// for(i=0; i<arr.length; i++){
//   if(arr[i]%2===0){
//     sum++;
//     console.log(arr[i])
//   }
// }
// console.log("Total number of even elements in array is : " +sum)


//-----------------------------------------------------------------------------------------------//
//now lets create an object first in js
// let obj1 = {username:"Upgread", id : 110, age : 21,};
// obj2 = {username:"TinTin", id : 112, age : 29,};
// obj3 = {username:"XLR8", id : 111, age : 22,};
// //console.log(obj1,obj2,obj3);
// console.log(obj1.id);


//--------------------------------------------------------------------------------------------------//
//now lets understood the object inside object 
// const object1 = {
//   username : "NarayanaChavan",
//   age : 21,
//   college_name : "Rmdssoe",
//   RMDSSOE : {
//     Gread : "A++",
//     location : "Pune",
//     Branch : "IT"
//   }
// }
// console.log(object1.RMDSSOE.Gread);


//-----------------------------------------------------------------------------------------------//
//let's explore the function in js
// function add(num1_Number , num2_divider){
//   return num1_Number ** num2_divider
// }
// console.log(add(2,2));


//-----------------------------------------------------------------------------------------------//
//lets print the table of an given number
let num = 12
for(i=1; i<=10; i++){
   num = num * i; 
  console.log(`${num} X ${i} = ${num}`)
}
