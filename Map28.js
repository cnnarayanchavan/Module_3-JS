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
console.log(map);

// now let's use the forEach() higher order function in this Map 
map.forEach(value => {
    console.log(value)
})