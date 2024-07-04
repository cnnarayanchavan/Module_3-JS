const myArr = new Array(1,2,3,4,5)
//let myArr2 = (6,7,8,9);
const myArr2 = myArr.join();
console.log(myArr2);
//this operation join the array but it is a type of String not Object of Array it'll bind the array as well as convert it into string

console.log(typeof(myArr2)); // the type is string here


