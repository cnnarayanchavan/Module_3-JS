//lets consider this alternative for the (for of loop) in Arrays in ja

let Arr1 = [45,34,67,23,67];
for(let n of Arr1){
    //console.log(n * 2);
}

//its workig completely fine in case of array but lets try new method for the same named as forEach() 
// in forEach we have to declaer function inside function 

let array = [32,44,23,43,23,23]
array.forEach( (num,)=>{   // see here we can write or get value of (value: number, index:number & arrya)
    // but rn we will just go with values of an array
    console.log(num);
})