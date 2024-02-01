//lets understand the map reducr higher order functiions in array
let array = new Array();
array.push(2,4,6,5,7,11,78,77);
console.log(array);
//now what i want to do here is 
//1st filter() it
//2nd map() it
//3rd reducr() it
//he he he he 
let res =array.filter(n => n%2!=0)
    .map(n => n+2)  // i dont understand why do sw use the array fucntion here again and again
    .reduce((a,b) => a+b);
    console.log(res);


