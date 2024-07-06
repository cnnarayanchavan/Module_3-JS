// 'THIS' keyword to refer the current context let's say in object...

// for eg

const user1 = {
    username : "Narayana",
    age : 12,
    greetUser : function(){
        console.log(`${this.username} , Welcome to website`) //here this is refering current object in this function 

        //but if we print this here  it will refer current context which is object
        console.log(this);  
    },
}

//but here if we change the value of username explicitly
user1.greetUser()
//user1.username = "Sam";
//user1.greetUser()

//so here if we console log 'this' here so it will refer the global context in node envor..
console.log(this);  //it will return the empty object 


//=================================Interesting===============================//

//"WHICH IS THE GLOBAL OBJECT ON BROWSER===== ANS IS 'WINDOW'"


//Arrow 

// let myArrow = (num)=>{
// return num + 100;
// }
// console.log(myArrow(5)); 

// more updated
let myArrow=(num)=> num +100;  //result will return implicitly do not have to write the 'return' keyword
console.log(myArrow(10)); 

//using parenthsis for the same

let myArrow2=(num)=> (num +100); 
console.log(myArrow(10));         //here if we do not use the parenthesis then it will be ok 

//Returning object from arrow function
let myArrow3 = () => ({username : "Narayana"}) //if we remove the parenthesis then it will return undefine (try it)
console.log(myArrow3()); 