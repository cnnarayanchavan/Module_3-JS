// Dates in js


//declearation of dates
let myDate = new Date();

console.log(myDate.toString());

console.log(myDate.toLocaleDateString());

console.log(myDate.toLocaleString());

console.log(myDate.getTime());  // it will return the time from the date in seconds from January 1 1970, UST where it represents miliseconds

//it will help ful to compare the time stamp between tow dates 

//e.g

let date1 = new Date("01-14-2023");
console.log(date1.toLocaleDateString());


let date2 = new Date("5-13-2021");
console.log(date2.toLocaleDateString());


//here between these tow dates i need to compare so here i will use time stamp 
console.log(Date.now()); // 1720072927519  date in miliseconds from 1 jan 1970

console.log(date1.getTime());  // 1673634600000 exact time of date1 which is user declared date

//here using these tow value we can have time stamps of these dates



//========================================================================================================//
//interview question 
//so here 

console.log(Date.now());  //it should return exact date but.. 1720073217525 which is in miliseconds 

//now the que is you have to convert it into seconds so we can devides it with 1000

console.log(Date.now()/1000); //should return values in 17200733297.06 decimal 

//for that we can use Math.floor (lower value) 

console.log(Math.floor(Date.now()/1000));

//========================================================================================================//

//one more thing that we should know here in datae the month is strat from 0 not from 1 so it is like 0 to 11 


let checkMonth = new Date("03-5-2020");
console.log(checkMonth.getMonth());  //it will return 2 which is March 

//but to avoding confusion of end user 

console.log(checkMonth.getMonth()+1); //add 1 in the value 
//now it will return 3 again which is March


