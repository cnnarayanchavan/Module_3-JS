//let's revise the last topic of js which is FunctionConstructor in js
//let's create a function first

let Narayan = function(Firstname,Lastname){  //this is called anonamous function means function without name
  this.firstname = Firstname;
  this.lastname = Lastname;
  this.greet = function (){
    console.table([Firstname,Lastname]);
  }
}
let obj1 = new Narayan('Narya','Chavan');
