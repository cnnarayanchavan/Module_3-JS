//lets destructure the array it is very cool
let Arr1 = new Array();
//console.log(Arr1);
Arr1.push(1,2,3,4,5,6)
//console.log(Arr1);

let[a,b,c,d, ,f]=Arr1;    // hre i removed e which is the value for index 4 but i left the , thrre so the js will comsider as empty space and still it work
console.log(a,b,c,d,f); 


//here we can swap value veryyyy easily by using the destructuring the array

let n1 = 100;
let n2 = 200;
[n1,n2] = [n2,n1];
console.log(n1,n2);


//now lets rtry somthing else with destructuring array;
// now lets split this string 
let strArr ="Narayan Chavan from RMDSSOE".split(" ");
console.log(strArr);






