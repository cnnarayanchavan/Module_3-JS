let myDate = new Date();
// console.log(myDate);


// console.log(myDate.toString());


// console.log(myDate.toLocaleDateString());


//console.log(myDate.getTime());


//console.log(myDate.toISOString());

//console.log(myDate.getUTCMilliseconds());


console.log(myDate.toISOString());
console.log(myDate.getMonth());  //her as day starts from 0 it will print from 0 ,1 ,2, 3 ...
// as a solution we use
console.log(myDate.getMonth()+1);


const fee = "5500 Pounds"
let curDate = new Date();
console.log(curDate);
console.log(`Your registration fee is ${fee} and the date of registration is ${curDate.toLocaleDateString()}`);
 