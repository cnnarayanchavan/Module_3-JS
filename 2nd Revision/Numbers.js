// Let's explore the numbers and it's methods in js

const num = 400;
console.log(num);

const Num = new Number(400);
console.log(Num.toFixed(2));  //decimal after number //400.00

//type of method to know the type of value of datatype (not a number method)
console.log(typeof(Object));


//toPrecision in this method priority will be given before decimal

const Number1 = 560.90909
console.log(Number1.toPrecision(3));  //should return 561 not 560.9


 //===================== Maths ====================//

 //Abs values .abs()

 let aank = -1000
 console.log(Math.abs(aank));  //convert negative values into positive

 console.log(Math.round(4.5));  //round of the value outpuut = 5

 console.log(Math.round(4.4));  //round of the value outpuut = 4

 console.log(Math.ceil(4.1)); //return the top value of arguments = 5

 console.log(Math.floor(4.4));  //returns the lowest value = 4

 

 
