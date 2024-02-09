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
let sum = 0;
for(i=0; i<arr.length; i++){
  if(arr[i]%2===0){
    sum++;
    console.log(arr[i])
  }
}
console.log("Total number of even elements in array is : " +sum)

