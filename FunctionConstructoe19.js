//lets create multipel methods calls

function funAdd (Num1,num2) {
  this.num1 = Num1
  this.num2 = Num2
  this.work=function(){
    console.log('Adding two number')
}

//now here lets create objects of that constructor function
  let A = new funAdd(12,12)
  console.log(A);
