//let's revise the last topic of js which is FunctionConstructor in js
//let's create a function first

let Narayan = function(Firstname,Lastname){  //this is called anonamous function means function without name
  this.firstname = Firstname;
  this.lastname = Lastname;
  this.greet = function (){
    console.table("Hello there!!");
  }
}
//here i wnat to create two instances of the constructor function 
let obj1 = new Narayan('Narya','Chavan');
let obj2 = new Narayan('Nitin' , 'Chavan')
obj2.lastname="Gadkari";
console.log(obj2);
// now what if i change the elast of the second candidate 
// console.log(obj1,obj2);
// //what if i print this in table format using 
console.table([obj1,obj2])
//here also we have to call the method created inside the constructor function
obj1.greet();


