//HERE WE ARE LEARNING ABT THE FUNCTIONS IN JS
//FUNCTIONS IN JS IS PREEY SIMILAR TO THE FUNCTIONS IN C(PROGRAMMING LANGUAGE)
function add(){
  let a=100;
  let b=100;
  let c =a+b;
  console.log(c);
}
add();


// here the function without name is anonymous
function calculator(num1,num2){
let operations = 'addi'
  switch(operations){
      case 'addi': 
      console.log(num1+ num2)
      break;
      case 'subs': 
      console.log(num1-num2)
      break;
      case 'div': 
      console.log(num1/num2)
      break;
      case 'mult': 
      console.log(num1*num2)
      break;
    default:
      console.log('invalid input now u have to get killed yourself')
  }
}
let res = calculator(10,10)
console.log(res);