// lets discuss the Map in js which is similar to object in js 
//lets consider the example where you have a map with key and values (collection of data)
let map = new Map();
//we can directly add elements into the map or can use the "set" method for do the same 
map.set("Narayan", 21);
map.set("Nitin", 30);
map.set("Bharati", 48);
map.set("Sanjay", 50);
//now here if we change the age of sanjay here it will update the value of it instead of adding in Map 
map.set("Sanjay",52);
//console.log(map);

// now let's use the forEach() higher order function in this Map 
map.forEach(value => {
    //console.log(value)
})

// problem statement : u have given an Map with user data collections with there names and salary, fetch the username and salary of an users.
let Userdata = new Map();
Userdata.set("Narayan Chavan",54600);
Userdata.set("Nitin Chavan" , 130000);
Userdata.set("Sanjay Chavan" , 500000);
Userdata.set("Renuka Chavan" , 89000);
console.log(Userdata);

//and for printing the keys and values we can use for of loop as well
for(let [k , v ] of Userdata){
    console.log(k+ " : " +v)
}

// fetch the perticular value for an collection of data
//we can get one value at a time using the "get" method 
let fetch = Userdata.get("Nitin Chavan");
console.log(fetch)
