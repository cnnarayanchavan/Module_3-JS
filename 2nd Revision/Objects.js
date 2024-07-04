const Alian = {
    name: 'altos',
    age: 1900,
    type : 'harvivorus',
    gender:'mail',
    speceship : {
    TopSpeed : 12000,
    wheels : 2,
    booster :'altrapro',
}
}
// console.log(Alian);

//what to create method which greet the Alian 

// Alian.greeting=function() {
//     console.log(`Hello ${this.name} you are JS users`);  //this is string interpolation 
// }

Alian.greeting = () => {
    console.log(`Hello ${this.age} you are JS users`);  // this.name would be undefined
}


console.log(Alian.greeting());

