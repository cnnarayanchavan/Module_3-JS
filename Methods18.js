//lets understand how methods works in js
//we know that the methods are created inside the object(instance of an class)

let Laptop = {
  Company : 'MSIgf63',
  processor : 'i5',
  Generatiomn : '9th',
  Ram : '16gb',
  Processor : function() {
    console.log("High processor with intel i5 9th gen engine additionaly it comes with tow thermal pests") 
}
}
for(let key in Laptop){
  console.log(key , Laptop[key])
}

//so here we define the method in the boject so we have to call the method using the '.' keyword
Laptop.Processor();
//console.log(Processor());
