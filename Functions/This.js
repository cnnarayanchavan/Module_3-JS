 let myFun1 = function(){
    console.log(this);
}
// myFun1();    // this both function will refer the global context
                           
function invest(){
    console.log(this);
}
// invest();   // this both function will refer the global context means 'global object'



const myFun = ()=>{
    console.log(this);   //this will return the empty object  '{}'
}
myFun()


// HERE HERE

//In a regular function (invest), this refers to the global object when called in the global scope.

//In an arrow function (myFun), this is lexically inherited from the surrounding scope at the time the function is defined. If defined at the top level of a script (not inside another function or class), it generally refers to the global object unless in strict mode or a module where this could be undefined.