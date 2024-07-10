let myMap = new Map();
myMap.set("fname","Narayana");   //if the element with same kay detected then the value will be updated
myMap.set('lname','chavan');
myMap.set('age',21);
myMap.set('PRN',72158292);

for (const [keys] in myMap){
    //console.log([keys]);             //so here for in loop cannot work with map as we cannnot iterate through 'MAP'
}

for(const [keys,val] of myMap){
    // console.log(keys,val);          //so can use for of loop
}

function printKeys(){
     console.log(myMap.get("fname"));
}

//  printKeys();
myMap.forEach(printKeys)