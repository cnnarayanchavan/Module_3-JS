//in this file there will be only revision part of past few days and the reevision session 
// and more of the comments and some questions 

//lets extract the numbers from digits
let num = 1124
let count = 0
while(num>0){
  num = parseInt(num / 10)
  count++
}
console.log(`total digits in number is ${count} `);


//now lets reverse the given number 

 num = 1392
 while(num > 0){
  lastdigit = parseInt(num % 10)
  num = parseInt(num / 10)
  console.log(` reverse of the number is ${lastdigit}`)
 }

//kust we have to take the value which is actually obtained without decimal
