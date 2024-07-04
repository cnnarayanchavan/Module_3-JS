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

Alian.greeting = () => {
    console.log(`Hello ${this.name} you are JS users`);  // this.name would be undefined
}

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

