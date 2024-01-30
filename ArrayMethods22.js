//lets see the differenct methods of an array we have studide in this lectres
//1] .push();    +++ append (add an element) at the end of the array

//2] .pop();     +++ pop oot the element(last element) like (FILO) from an array

//3] .shift();   +++ shift the element of an array to the LHS (it will change the index number of an elements of an array)

//4] .unshift(); +++ shift the element of an array to the RHS (unshifting)

//5] .splic();   +++ 

//6] .split();   +++ slpits an values of an variables in array form (values could be NUmber, String etc)


let Arr1 = [];  //empty array
Arr1.push(1,2,3,4,5,6,7,8,9,10);
//console.log(Arr1);

//now let pop some elements //we have to give the index number of element that we want to pop
Arr1.pop(6);
Arr1.pop(7);
Arr1.pop(8);
Arr1.pop(9);
console.log("This is the Arr1");
console.log(Arr1);

//now lets shift some elemetnts to left and right 
Arr1.shift(); 
console.log('This is the Arr1 after shift the arr1');              //it will remove element from the start of an array
console.log(Arr1);          // it works as a pop but it will pop element from start of an array

Arr1.unshift(1);    
console.log('And this is the arr1 after adding element from start');         //on the othe hand the unshift will add an element in array from the start 
console.log(Arr1);


