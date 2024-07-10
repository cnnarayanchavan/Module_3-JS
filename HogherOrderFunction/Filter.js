//let's check it out

let array1= [1,2,3,4,5,6,7,8];
let ans = array1.filter( (nums)=> {
    return nums>4
} );  //now this will return empty array as we define scope by giving curly bre.. 
//but we return this explicitely then it will print 
console.log(ans);



