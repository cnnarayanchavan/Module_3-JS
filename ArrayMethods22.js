//lets see the differnt methods of an array we have studide in this lectres
//1] .push();    +++ append (add an element) at the end of the array

//2] .pop();     +++ pop oot the element(last element) like (FILO) from an array

//3] .shift();   +++ shift the element of an array to the LHS (it will change the index number of an elements of an array)

//4] .unshift(); +++ shift the element of an array to the RHS (unshifting)

//5] .splic();   +++ it will delete the element of mentinode index

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
console.log('This is the Arr1 after shift to the LHS the arr1');              //it will remove element from the start of an array
console.log(Arr1);          // it works as a pop but it will pop element from start of an array

Arr1.unshift(1);    
console.log('And this is the arr1 after adding element from start RHS');         //on the othe hand the unshift will add an element in array from the start 
console.log(Arr1);

//now splic some elements fom an array hehehehehe
//syntax is like
// Arr1.splice(<index number> , <number of element u want to splice> , <the no. of element u want to add>)

Arr1.splice(4,1);
console.log('This is the arr1 after slice the element at index "4"')
console.log(Arr1);



Arr1.splice(2,3,10,11,12);  //now here we remove element of index 3 with three elemnts and add further new three elements as per syntax
console.log("So this is the arr1 after removing and adding again elements in it");
console.log(Arr1);

//SO THIS IS THE FIVE DIFF. METHODS IN ARRAYS USED FOR SOLWING QUESTIONS 

