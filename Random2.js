//assignment given by telusko
//rxteaction of digit using while loo

let num = 12345
while(num>0){
  let lastdigit= parseInt(num%10)
  num = parseInt(num / 10)
  console.log(lastdigit);
}




