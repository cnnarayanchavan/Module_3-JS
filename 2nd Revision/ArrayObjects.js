// In future we can have apis which has array of an objects
let arr1 = [1,2,3,4];
// arr1 = (a,b,c,d);
//console.log(a);

const obj1 = {
    username : "Narayana",
    upi : "asdafasf@asfa",
    id : 100
}

// console.log(obj1.username);

//here we can destrecture the object as well 

const{username:name} = obj1;  ///this is object destrecturing 
// console.log(name);

//Singleton and non-singleton object s

const myObj = new Object();   // this is decleration of SINGLETON OBJECT and how reguarly we define object which is nothing but the non-singleton object declearation
myObj.Country = "india"
myObj.State = "Maharashtra";
// console.log(myObj);
// console.log(typeof Object);



//Joining objects 
//here we have 2 objects

obj2 = {name: "narayana", gender : "Male", age: 21};

obj3 = {school: "rmdssoe", degree : "A++", rank: 20};

// const obj4 = [obj2,obj3];  // will return array of these 2 objects 

//how we use Object.assign() method for joining objs

let A = Object.assign({},obj2,obj3)
console.log(A);

// OR we have simple SPREAD method 

let B = {...obj2 , ...obj3}   
console.log(B);

console.log(Object.keys(B));
console.log(Object.values(B));
