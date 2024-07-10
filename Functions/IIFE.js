//why we need immediately invoked function expression 

//Named IIFE

(function dB1(){
  console.log("DATABASE CONNECTED SUCCESSFULLY");    //Unnamed IIFE
})();

//Arrow IIFE
(()=>{
    console.log("DATABASE 2 CONNECTED SUCCESSFULLY");     //Named IIFe
})();

//passing parameter
((name)=>{
    console.log(`DATABASE 2 CONNECTED SUCCESSFULLY ${name}`);   // Parameterised Named IIFE
})("NARAYANA")

//Syntax IIFE
//  ()()        'uk simple hein'


//SO... to avoide the from global scope or object pollution means that to avide the declaration from global scope to interfare in function we use IIFE