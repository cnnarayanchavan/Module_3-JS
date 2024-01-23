// let Obj1_of_Narayan = {
//     name: 'Narayaaaa',
//     age: 21,
//     lastname: 'chavan',
//     inestment: 8000
// }

// console.log(Obj1_of_Narayan);

//here we can use . operator to specify the value that we want to fetch




//now let's try something new
//with new type of object in JavaScript
let Alian = {
    name: 'altos',
    age: 1900,
    type : 'harvivorus',
    gender:'mail',
    speceship : {
    TopSpeed : 12000,
    wheels : 2,
    booster :'altrapro',
}
}
//this is nothing but the conplext object
// console.log(Alian.speceship.wheels);

//now i want to delete some properties form the created object 

delete Alian.speceship.wheels
console.log(Alian.speceship.wheels);
console.log(Alian)


