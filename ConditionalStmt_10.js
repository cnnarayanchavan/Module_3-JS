//lets start with the 'if else' conditononal statements.
let x = 2 ;
let y = 20 ;
if( x > y){
  console.log("true");
  consloe.log("woww")
}
else{
  console.log("false");
  console.log("Alass!!!!")
}
//if the statement content more than one declearation the you have to add curly brackets
//follow the concentions, it is a good practice


//here let's do one assignment 
let a = 24
if(a%2==0){
  console.log("even number")
}
else{
  console.log("odd number")
}

//let's try the simplar way which is 'Ternary Operator'

//Syntax : var = condition ? stmt1 : stmt2 ;

let num = 10;
let val1;
let var1 = (num % 2 ==0) ? "Even" : "Odd "
console.log(var1)
