//Use of 'this'  keyword in js

let obj1 ={
  firstname:'narayan',
  lastname:'chavan',
  age:21,
  prn:1234,
  greet:function(){
    'hey ${this.firstname} ${this.lastname} welcome to communaty and please enter your ${this.age}'
  }
}
obj1.greet();

