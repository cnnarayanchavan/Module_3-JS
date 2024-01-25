//HERE WE ARE LEARNING ABT THE FUNCTIONS IN JS
//FUNCTIONS IN JS IS PREEY SIMILAR TO THE FUNCTIONS IN C(PROGRAMMING LANGUAGE)
function add(){
  let a=90;
  let b=99;
  let c =a+b;
  console.log(c);
}
add();


// here the function without name is anonymous

function calculator(){
  let num1 = 3
  let num2 = 3
  let operations = 'addi'
  console.log(operations)
  switch(operations){
      case 1: 'addi' 
      console.log(num1+num2)
      break;
      case 2: 'subs'
      console.log(num1-num2)
      break;
      case 3: 'div'
      console.log(num1/num2)
      break;
      case 4: 'multi'
      console.log(num1*num2)
      break;
    default:
      console.log('invalid input')
  }
}

calculator()
// let result = calculator()
// console.log(result)
