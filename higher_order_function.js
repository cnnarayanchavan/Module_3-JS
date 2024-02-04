//Let's revise the higner order function 
// Filter
// map
// reduce 

//before higher order let's just see the functions in JS

//Fun1.
function addition(num1 , num2){
  if(num1 === 20 && num2 ===30){
    return num1 + num2;
  }
  else{
    console.log("Invalid Input")
  }
}
console.log(addition(20,30))

//Fun2.
const Arr = [1,24,9,20,5,96]
function returnEven(Arr){
  for(i=0; i<Arr.length; i++){
    if(i%2===0){
      console.log(i);
    }
  }
  return i;
}
const op = console.log(returnEven(Arr))
console.log(op);


