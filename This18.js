//Use of 'this'  keyword in js

let obj1 ={
  firstname:'narayan',
  lastname:'chavan',
  age:21,
  prn:1234,
  //greet:function() => console.log('hey ${this.firstname} ${this.lastname} welcome to communaty and please enter your ${this.age}')
  //here we have to use the back tick for showing properties in the function 
  greet:function(){
    console.log(`hey ${this.firstname} ${this.lastname} welcome to community and are you ${this.age} years old?`)
  }
}
obj1.greet();

//so from the tast cases we got to know that we cannnot use arrow function in objects for creating methods 

