// add all prices from incoming shoping cart 

let myCart = [

    {
        "course" : "Chai aur JS",
        "price" : 999
    },

    {
        "course" : "Python bash",
        "price" : 399
    },

    {
        "course" : "Core java ",
        "price" : 9990
    },
    {
        "course" : "rust rust",
        "price" : 99
    },
]


// problem statement is return the total ptice of all courses form incoming object array

let ans = myCart.reduce( (acc,item)=>{   //here the item denoting every object in the array 
    return acc + item.price;
},0 )
console.log(`Grant total is ${ans} os all your courses`);