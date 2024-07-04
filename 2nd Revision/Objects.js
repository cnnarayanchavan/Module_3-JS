const mySym = Symbol(Narayan)

const Alian = {
    mySym : 'Narayana' ,
    name: 'altos',
    age: 1900,
    type : 'harvivorus',
    gender:'male',
    speceship : {
    TopSpeed : 12000,
    wheels : 2,
    booster :'altrapro',
}
}

//accessing values from objects
console.log(Alian[gender]);

// console.log(Alian);

//what to create method which greet the Alian 

Alian.greeting=function() {
    console.log(`Hello ${this.name} you are JS users`);  //this is string interpolation 
}

Alian.greeting = () => {
    console.log(`Hello ${this.age} you are JS users`);  // this.name would be undefined
}


console.log(Alian.greeting());

