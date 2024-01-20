let x 
console.log(x)
//here x data type is 'undefinde'

x = 8
console.log(x,  typeof x)
//now here x is 'number' type

x = 8 + " "
console.log(x,  typeof x)
//now here x is 'string' type

x = x - 2
console.log(x,  typeof x)
// here the type coercion comes here we use '- operator with string it will convert that string into the number type'

//now we will check what will happen if we add number type with string type
x = x - " "
console.log( " value of x is now  :"  +x,  " And type is:  " +typeof x)
//so it will print type string if add 2 strings type


//lets try something diff.
x = 8 + " "
console.log(x,  typeof x)

x = x+2
console.log(x)
//output = 82T