const score = 400
//console.log(typeof score);

const balance = new Number(100)
//console.log(balance);

//console.log(balance.toString());
//console.log(typeof balance);
//console.log(balance.toFixed(5));           //method use to give the decimal after digits

const otherNumber = 123.79665

//console.log(otherNumber.toPrecision(4));

const hundreds = 100000000
//console.log(hundreds.toLocaleString('en-in'));            //this is also correct
//console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

//console.log(Math);
//console.log(Math.abs(-4));
 //console.log(Math.round(4.6));
 console.log(Math.ceil(3.2));    //it will return upper valur which is ="4"
 console.log(Math.floor(3.9));   // and this will return lower value which is="3"
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


//console.log(Math.random());
//console.log((Math.random()*10)+1);
//console.log(Math.ceil(Math.random()*10) + 1);

 const min = 10
 const max = 20

 console.log(Math.floor(Math.random() * (max - min + 1)) + min)
