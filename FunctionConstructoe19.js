//lets create multipel methods calls

function funAdd (Num1,Num2) {
  this.a = Num1
  this.b = Num2
  this.work=function(){
    console.log('Adding two number')
}
}

//now here lets create objects of that constructor function
  let A = new funAdd(12,12)
  console.log(A);
