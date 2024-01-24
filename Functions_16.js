//HERE WE ARE LEARNING ABT THE FUNCTIONS IN JS
//FUNCTIONS IN JS IS PREEY SIMILAR TO THE FUNCTIONS IN C(PROGRAMMING LANGUAGE)
function add(){
  let a=90;
  let b=99;
  let c =a+b;
  console.log(c);
}
add();

//now lets gain about the return and passing in functions

// here the function without name is anonymous

function calculator(){
  let num1 
  let num2
  let operations
  switch(operations){
      case: 'addi' 
      console.log(num1+num2)
      break;
      case: 'subs'
      console.log(num1-num2)
      break;
      case: 'div'
      console.log(num1/num2)
      break;
      case: 'multi'
      console.log(num1*num2)
      break;
    default:
      console.log('invalid input')
  }
}

let result = calculator(3,3)
console.log(result)
