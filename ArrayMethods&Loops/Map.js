// Map: object in javascript , holds the data in key value pair ('key','value')

let myMap = new Map();
//console.log(typeof myMap);  //object
myMap.set("fname","Narayana");   //if the element with same kay detected then the value will be updated
myMap.set('lname','chavan');
myMap.set('age',21);
myMap.set('PRN',72158292);
//console.log(myMap);

//// myMap.forEach( (a,b)=>{ 
                                    //forEach()
//         console.log(a,b);
// } )

for(const [keys , vals] of myMap){
    console.log(keys+":-"+vals);            //forOF loop
}

//here's a thing we cann not iterate through object using forOf loop



