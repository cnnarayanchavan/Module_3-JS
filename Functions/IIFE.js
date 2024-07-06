//why we need immediately invoked function expression 

//Named IIFE

(function dB1(){
  console.log("DATABASE CONNECTED SUCCESSFULLY");  
})();

//Arrow IIFE
(()=>{
    console.log("DATABASE 2 CONNECTED SUCCESSFULLY");
})();

//passing parameter
((name)=>{
    console.log(`DATABASE 2 CONNECTED SUCCESSFULLY ${name}`);
})("NARAYANA")

//Syntax IIFE
//  ()()        'uk simple hein'


//SO... to avoide the from global scope or object pollution means that to avide the declaration from global scope to interfare in function we use IIFE