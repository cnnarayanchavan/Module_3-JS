{}  //this is nothing but the scope

//lets understand the problem with "var"

// let a = 10;
// const b = 15;
// var c = 20;

// console.log(a);  //10
// console.log(b);  //15
// console.log(c);  //20

// but here i'm gonna add this variables in the scope of is statement

var c = 300;  //NOW THE console.log  still will print the value of c is 30 even after defining


if (true) {
    let a = 10;
    const b = 15;   // here would be the case that this if block is coming from other package but still it will return the value of c is 20 not 300
    var c = 20;
}


//console.log(a);  // Reference error which is a is not define 
//console.log(b);  // same as a
console.log(c);  // 20 //but here's the kick, it will print the value of c even it is defined the scope of if

//but if we define the var a again here it will print the value form this declaration

