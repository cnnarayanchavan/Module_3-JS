//lets understand object type 'Arrays' taa daaa
let Arr1 = new Array(); //this is one type of creating an array 
let arr1 = [];         // and this is another type of creating an arrays in js

//so here we will fo with 1st method

Arr1.push(1);
Arr1.push(1);
Arr1.push(2);
Arr1.push(4);
console.log(Arr1);

//now we will use the second array declearation 
arr1 = ['Narayana','Nitin','Pooja', 'Aarti', 'Chota Chiikuu'];
console.log(arr1);
//also we will check the length of an  both arrays
console.log(`Length of an arrays: ${arr1.length}`);

//now lets check some additional operations

//1] let's fetch elements using index number 
console.log(arr1[3]);

//now lets create the array with the mix data in it
let array = ['Narayan', 1392002, Qualification={marks: 90, sgpa:'8.80'}, function Add(n1,n2){console.log(n1+n2)}];  //here we use arrow function but the thing is we cannot use the array function as it is in such objects like array
console.log(array);
//console.log(array.Add(10,10));
//console.log(array.Qualification.sgpa);  //see here we cannot fetch element form array like this we use index number here to do that 

array[3](10,10);

