//Let's revise the higner order function 
// Filter
// map
// reduce 

//before higher order let's just see the functions in JS

//Fun1.
// function addition(num1 , num2){
//   if(num1 === 20 && num2 ===30){
//     return num1 + num2;
//   }
//   else{
//     console.log("Invalid Input")
//   }
// }
// console.log(addition(20,30))

//Fun2.
 let Arr = [1,24,9,20,5,96]
// function returnEven(x){
// for(i=0; i<Arr.length; i++){
//   if(Arr[i] % 2 ===0){
//     console.log(Arr[i]);
//   }
// }
// }
// const op = console.log(returnEven(Arr))
// console.log(op);

// let a = 100;
// let sum = 0;
// while(a>0){
//   a = parseInt(a/10);
//   sum++;
// }
// console.log(`there will be total ${sum} digits in numbers.`);

//another function for map
Arr.forEach(s => {
 consol.log(s*2)
})

const op = Arr.map(x => {
  if(x > 30){
   return x;
  }
})
Arr.forEach( x => {
  console.log(x);
})
  
console.log(op);
