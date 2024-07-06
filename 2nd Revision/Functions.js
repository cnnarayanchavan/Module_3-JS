//USE OF "REST" AND "SPREAD" OPERATOR   

function claculateCartPrice(...Prices){
    return Prices;
}

console.log(claculateCartPrice(100,200,300,400,500));


//passing objtct to the function 


//lets have an object
const User1 = {
    "username" : "cnnarayana",
    "price" : 23420,
    "Address" : {
        "city" : "Parbhani",
        "state" : "Maharashtra",
        "Country" : "India"
    }
}

function handelObject(AnyObj){
    console.log(`username is ${AnyObj.Address.city} and price is ${AnyObj.price} `);
}

handelObject(User1);  //here i passed the object into the function as an arguments


//Passing Array into the functon

const usernames = ["Narayana", "Nitin", "Renuka", "Vaishli"];

function handelArray(myArray){
    console.log(` User name is prf
        ${myArray[3]}`);
}

handelArray(usernames);
