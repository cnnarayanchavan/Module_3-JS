//lets destructure the array it is very cool
let Arr1 = new Array();
//console.log(Arr1);
Arr1.push(1,2,3,4,5,6)
//console.log(Arr1);

let[a,b,c,d,e,f]=Arr1;
//console.log(`Value of a is : ${a}`); 


//here we can swap value veryyyy easily by using the destructuring the array

let n1 = 100;
let n2 = 200;
[n1,n2] = [n2,n1];
console.log(n1,n2);


//now lets rtry somthing else with destructuring array;