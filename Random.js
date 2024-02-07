//let's practice basic jsvascript for next 20 mins

//here number is prime or not 

// let number = "Narayana"  //lets get a wrong statment here to see how backtick' ` ' work 
// //find number is prime or not
// //prime is what the number which is divisible by one and thet number 
// if(number%2===0)
//   console.log("it is even")
// else if(number ** 2 === 144)
//   console.log("square is correct")
// else
//   console.log(`totallllyy wrong
//   Statement`)

//now let's check some string questions 
// let username = 'Narayana Chavan from "RMDSSOE" '
// //here i just wnated to give double quote to the RMDSSOE college
// console.log(username)


//here we are again let's try the extraction of number and count total digits
let number = 1124;
let count = 0;
while(number>0){
  number = parseInt(number / 10);
  count++; //post incriment
}
 console.log("Toral digits in number is : "+count);


//now lets fetch the max number inside the array
let arr1 = [34,54,65,34,67,55]
let max = 0
for( i=0; i<arr1.length; i++){
  if(max<arr1[i]){
    max = arr1[i];
  }
}
console.log(max)

