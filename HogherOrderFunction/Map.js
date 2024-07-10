//kinda work same as forEach loop 
// here
 let array = [1,2,3,4,5]
//  const newNums = array.map( (nums)=>{
//     return nums+10      
//  } )
//  console.log(newNums);

 
 //chaining or methods (using multipel method for same array)

 const newNums2 = array.map( (nums)=>(nums+10))
                        .map((nums)=>
                            (nums+1) //as here we are not returning anything in first map method it will return undefind and then as we are returning in second map method it so it will add undefine + number so the result is 'NaN'
                        )
                        .filter( (nums)=>(nums>15) ) 
                        console.log(newNums2);         //why it is giving me NaN??
                        



 //let's check what it it will return if we add undefine and number

 let temp = undefined + 12; //it should return NaN
 //console.log(temp);