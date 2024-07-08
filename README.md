# JS
# Learning javascript from scratch from YT (Beginner Level )
# Learnt Recursion in Javascriot
# Setting function in stack and calling one after aother (LIFO)
# Setting us itreative mrthod for multipel tasks
feeling failed coz i missed one day 
18th feb 2024 the day i missed my contribution and loose strick .

1. First revision 26th of feb.


<br/><hr/>
## Arrow Functions: If you used an arrow function for greeting, this would be lexically bound, meaning it would refer to the this value from the surrounding scope, not the Alian object. So, arrow functions are generally not used for methods where this refers to the object itself.

*javascript
Copy code*

<code>
Alian.greeting = () => {
    console.log(`Hello ${this.name} you are JS users`);  // this.name would be undefined
}
</code>

## In this case, this.name would be undefined because this is not bound to the Alian object.

<br/><hr/>




## Lexical Binding Explained

*Lexical Binding means that the value of this inside the arrow function is determined by the this value from the surrounding scope where the arrow function was defined.*

*Visualizing Lexical Binding
To help visualize, think of it like this:*

## In Regular Functions:

this is dynamically bound. It changes depending on how the function is called.

## In Arrow Functions:

this is lexically bound. It’s set to the this value from the scope where the arrow function was defined, not where it was called.
<br/><hr/>


##  Defining an Object with Symbol as a Key

e.g:
<code> 
const Alian = {
    [mySym] : 'Narayana',
    name: 'altos',
    age: 1900,
}
</code>

[mySym]: 'Narayana': This uses computed property names to set a property on the Alian object. The key for this property is the mySym symbol. This is an example of using a symbol as a property key.


<br/><hr/>

## Need to understand objects and arrays indepth from declaration to methods as we have further API fetch and all they are in either array or object form [JSON object] (javascript object notation)

<br/><hr/>

## Normal Function and Arrow function 

<code>
function invest(){
    console.log(this);
}
</code>

<code>
const myFun = ()=>{
    console.log(this);   //this will return the empty object  '{}'
}

myFun();
</code>

<h4>Here</h4>

* <h4>In regular function:</h4>
In a regular function (invest), this refers to the global object when called in the global scope.


* <h4>In Arrow function:</h4>
In an arrow function (myFun), this is lexically inherited from the surrounding scope at the time the function is defined. If defined at the top level of a script (not inside another function or class), it generally refers to the global object unless in strict mode or a module where this could be undefined.

<br/><hr/>


