const a1 = [1,2,3,4,5];
const a2 =(a1.slice(1,4));
console.log(a2); //[2,3,4]
console.log(a1);

const a3 = [2,3,4,5,6]
const a4=(a3.splice(1,3))
console.log(a4); //[3,4,5]
console.log(a3); //[2,6]

//May be asked as interview question 