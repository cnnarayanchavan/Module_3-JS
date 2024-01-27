//lets do some arrows 

let add = (n1 , n2) => {
    return n1**n2
}
let result = add(3,2)
console.log(result)


// now lets see the differenct between the normal function and the arrow function in js
// normal function 
let x = function (num1, num2){   //here this is the function without name wich is called 'Anonymous' function 
    return num1 + num2;
}
let z = x(100,100)
console.log(x)

