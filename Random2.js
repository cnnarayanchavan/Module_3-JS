//assignment given by telusko
//rxteaction of digit using while loo

let num = 12345
while(num>0){
  num = parseInt(num / 10)
  lastdigit = parseInt(num%10)
  console.log( "reverse of the digits are: " +lastdigit )
}




